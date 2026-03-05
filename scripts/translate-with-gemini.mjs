/**
 * translate-with-gemini.mjs
 * Saves progress after EACH post — never loses work on interruption.
 *
 * Usage:
 *   GEMINI_API_KEY=your_key node scripts/translate-with-gemini.mjs <lang> <count>
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_FILE = join(__dirname, "../src/lib/blogData.ts");

const TARGET_LANG = process.argv[2] || "nl";
const COUNT = parseInt(process.argv[3] || "10", 10);
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.5-flash";

const LANG_NAMES = { nl: "Dutch", fr: "French", ar: "Arabic", hi: "Hindi" };
const ALL_LANGS = ["nl", "en", "fr", "ar", "hi"];

if (!API_KEY) { console.error("❌  Set GEMINI_API_KEY env var"); process.exit(1); }
if (!LANG_NAMES[TARGET_LANG]) { console.error(`❌  Unknown lang: ${TARGET_LANG}`); process.exit(1); }

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function callGemini(prompt, attempt = 0) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.1, maxOutputTokens: 16384 },
        }),
    });

    if (res.status === 429 && attempt < 8) {
        const wait = (parseInt(res.headers.get("retry-after") || "35") + 3) * 1000;
        process.stdout.write(`\n   ⏳ Rate limited — waiting ${Math.ceil(wait / 1000)}s...\n`);
        await sleep(wait);
        return callGemini(prompt, attempt + 1);
    }

    if (!res.ok) {
        const err = await res.text();
        if (attempt < 3) { await sleep(3000); return callGemini(prompt, attempt + 1); }
        throw new Error(`HTTP ${res.status}: ${err.slice(0, 300)}`);
    }

    const data = await res.json();
    return (data.candidates?.[0]?.content?.parts?.[0]?.text || "").trim()
        .replace(/^```[\w]*\n?/, "").replace(/\n?```$/, "").trim();
}

async function tx(text, isHtml = false) {
    const lang = LANG_NAMES[TARGET_LANG];
    const prompt = isHtml
        ? `Translate the following HTML to ${lang}.\nRULES:\n- Keep ALL HTML tags, attributes, class names, hrefs exactly as-is\n- Only translate text between tags\n- Do NOT wrap in markdown\n- Return ONLY the translated HTML\n\n${text}`
        : `Translate to ${lang}. Output ONLY the translation, nothing else.\n\nText: ${text}`;
    return callGemini(prompt);
}

// ── parser ─────────────────────────────────────────────────────────────────
function extractSection(raw, lang) {
    const marker = `    "${lang}": [`;
    const start = raw.indexOf(marker);
    if (start === -1) return { text: null, sStart: -1, sEnd: -1 };
    let end = raw.length;
    for (const l of ALL_LANGS) {
        if (l === lang) continue;
        const p = raw.indexOf(`    "${l}": [`, start + marker.length);
        if (p !== -1 && p < end) end = p;
    }
    const objEnd = raw.indexOf("\n};", start);
    if (objEnd !== -1 && objEnd < end) end = objEnd + 1;
    return { text: raw.slice(start + marker.length, end), sStart: start + marker.length, sEnd: end };
}

function extractPosts(content) {
    const posts = [];
    let depth = 0, start = -1, inTpl = false, inStr = false, sc = "", esc = false;
    for (let i = 0; i < content.length; i++) {
        const c = content[i];
        if (esc) { esc = false; continue; } if (c === "\\") { esc = true; continue; }
        if (inTpl) { if (c === "`") inTpl = false; continue; }
        if (inStr) { if (c === sc) inStr = false; continue; }
        if (c === "`") { inTpl = true; continue; } if (c === '"' || c === "'") { inStr = true; sc = c; continue; }
        if (c === "{") { if (depth === 0) start = i; depth++; }
        else if (c === "}") { depth--; if (depth === 0 && start !== -1) { posts.push(content.slice(start, i + 1)); start = -1; } }
    }
    return posts;
}

function ex(s, re) { const m = s.match(re); return m ? m[1] : ""; }
function parsePost(ps) {
    return {
        title: ex(ps, /title:\s*["']([^"']+)["']/),
        slug: ex(ps, /slug:\s*["']([^"']+)["']/),
        category: ex(ps, /category:\s*["']([^"']+)["']/),
        readTime: ex(ps, /readTime:\s*["']([^"']+)["']/),
        publishedAt: ex(ps, /publishedAt:\s*["']([^"']+)["']/),
        excerpt: ex(ps, /excerpt:\s*["']([^"']*?)["']/),
        image: ex(ps, /image:\s*["'`]([^"'`]+)["'`]/),
        authorName: (() => { const m = ps.match(/author:\s*\{[^}]*name:\s*["']([^"']+)["']/); return m?.[1] ?? ""; })(),
        authorRole: (() => { const m = ps.match(/author:\s*\{[^}]*role:\s*["']([^"']+)["']/); return m?.[1] ?? ""; })(),
        contentHtml: (() => { const m = ps.match(/contentHtml:\s*`([\s\S]*?)`\s*\n\s*\}/); return m?.[1] ?? ""; })(),
    };
}
function buildPost(p) {
    const safe = (p.contentHtml || "").replace(/`/g, "\\`").replace(/\${/g, "\\${");
    return `        {
            title: ${JSON.stringify(p.title)},
            slug: ${JSON.stringify(p.slug)},
            category: ${JSON.stringify(p.category)},
            readTime: ${JSON.stringify(p.readTime)},
            publishedAt: ${JSON.stringify(p.publishedAt)},
            excerpt: ${JSON.stringify(p.excerpt)},
            image: ${JSON.stringify(p.image)},
            author: { name: ${JSON.stringify(p.authorName)}, role: ${JSON.stringify(p.authorRole)} },
            contentHtml: \`
${safe}
\`
        }`;
}

function saveProgress(translatedSoFar, keepPosts) {
    const raw = readFileSync(BLOG_FILE, "utf8");
    const { sStart, sEnd } = extractSection(raw, TARGET_LANG);
    const all = [...translatedSoFar, ...keepPosts.map(buildPost)];
    writeFileSync(BLOG_FILE, raw.slice(0, sStart) + all.join(",\n") + "\n    " + raw.slice(sEnd), "utf8");
}

// ── MAIN ───────────────────────────────────────────────────────────────────
(async () => {
    console.log(`\n🌐 EN → ${LANG_NAMES[TARGET_LANG]} (${TARGET_LANG}), first ${COUNT} posts — ${MODEL}\n`);

    let raw = readFileSync(BLOG_FILE, "utf8");
    const { text: enText } = extractSection(raw, "en");
    const enPosts = extractPosts(enText).map(parsePost).slice(0, COUNT);
    console.log(`   ${enPosts.length} EN posts to translate`);

    const { text: tgtText } = extractSection(raw, TARGET_LANG);
    const existingPosts = extractPosts(tgtText || "").map(parsePost);

    // Skip slugs already translated (in case of re-run after partial completion)
    const existingSlugs = new Set(existingPosts.slice(0, COUNT).map(p => p.slug));
    const toTranslate = enPosts.filter(p => !existingSlugs.has(p.slug));
    const alreadyDone = existingPosts.filter(p => existingSlugs.has(p.slug)).slice(0, COUNT);
    const keepPosts = existingPosts.slice(COUNT);

    if (toTranslate.length === 0) {
        console.log("   All posts already translated!");
        process.exit(0);
    }
    console.log(`   Already translated: ${alreadyDone.length}, remaining: ${toTranslate.length}\n`);

    const translatedPosts = [...alreadyDone.map(buildPost)];

    for (let i = 0; i < toTranslate.length; i++) {
        const p = toTranslate[i];
        const num = alreadyDone.length + i + 1;
        console.log(`\n   [${num}/${COUNT}] ${p.title}`);

        const [title, excerpt, authorName, authorRole] = await Promise.all([
            tx(p.title), tx(p.excerpt), tx(p.authorName), tx(p.authorRole),
        ]);
        await sleep(500);

        console.log(`      → "${title.slice(0, 60)}"`);
        console.log(`      Translating contentHtml...`);
        const contentHtml = await tx(p.contentHtml, true);

        translatedPosts.push(buildPost({ ...p, title, excerpt, authorName, authorRole, contentHtml }));
        console.log(`      ✅ Done — saving to disk...`);

        // ← Save after EVERY post so we never lose work
        saveProgress(translatedPosts, keepPosts);
        console.log(`      💾 Saved (${num}/${COUNT})`);

        if (i < toTranslate.length - 1) await sleep(3000); // 3s between posts
    }

    console.log(`\n✅ Done! ${COUNT} posts in "${TARGET_LANG}" section. blogData.ts saved.\n`);
})();
