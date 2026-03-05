/**
 * translate-with-deepl.mjs
 *
 * Uses DeepL API to translate EN blog posts to NL, FR, AR.
 * Saves after EACH post. Same EN slugs preserved.
 *
 * Get a free API key at: https://www.deepl.com/pro-api
 * Free tier: 500k chars/month, no per-minute rate limits.
 *
 * Usage:
 *   DEEPL_API_KEY=your_key node scripts/translate-with-deepl.mjs <lang> [count]
 *   DEEPL_API_KEY=xxx node scripts/translate-with-deepl.mjs nl
 *   DEEPL_API_KEY=xxx node scripts/translate-with-deepl.mjs fr
 *   DEEPL_API_KEY=xxx node scripts/translate-with-deepl.mjs ar
 *
 * NOTE: Hindi (hi) is not supported by DeepL.
 */

import * as deepl from "deepl-node";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_FILE = join(__dirname, "../src/lib/blogData.ts");

const TARGET_LANG = (process.argv[2] || "nl").toLowerCase();
const COUNT = parseInt(process.argv[3] || "44", 10);
const API_KEY = process.env.DEEPL_API_KEY;
const ALL_LANGS = ["nl", "en", "fr", "ar", "hi"];

// DeepL target language codes
const DEEPL_CODES = { nl: "NL", fr: "FR", ar: "AR" };

if (!API_KEY) {
    console.error("❌  Set DEEPL_API_KEY env var. Get it free at deepl.com/pro-api");
    process.exit(1);
}
if (!DEEPL_CODES[TARGET_LANG]) {
    console.error(`❌  DeepL doesn't support "${TARGET_LANG}". Use: nl, fr, or ar.`);
    process.exit(1);
}

const translator = new deepl.Translator(API_KEY);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function txText(text) {
    if (!text || text.trim().length < 2) return text;
    const result = await translator.translateText(text, null, DEEPL_CODES[TARGET_LANG]);
    return result.text;
}

async function txHtml(html) {
    if (!html || html.trim().length < 5) return html;
    // DeepL handles HTML natively — preserves all tags
    const result = await translator.translateText(html, null, DEEPL_CODES[TARGET_LANG], {
        tagHandling: "html",
    });
    return result.text;
}

// ── parser ──────────────────────────────────────────────────────────────────
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

function saveToDisk(posts, keepPosts) {
    const raw = readFileSync(BLOG_FILE, "utf8");
    const { sStart, sEnd } = extractSection(raw, TARGET_LANG);
    const all = [...posts, ...keepPosts.map(buildPost)];
    writeFileSync(BLOG_FILE, raw.slice(0, sStart) + all.join(",\n") + "\n    " + raw.slice(sEnd), "utf8");
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
(async () => {
    // Check API key works
    try {
        const usage = await translator.getUsage();
        const pct = Math.round((usage.character.count / usage.character.limit) * 100);
        console.log(`✅ DeepL connected. Usage: ${usage.character.count.toLocaleString()} / ${usage.character.limit.toLocaleString()} chars (${pct}%)`);
    } catch (e) {
        console.error("❌ DeepL auth failed:", e.message);
        process.exit(1);
    }

    console.log(`\n🌐 EN → ${TARGET_LANG.toUpperCase()} (DeepL), ${COUNT} posts\n`);

    const raw = readFileSync(BLOG_FILE, "utf8");

    // EN posts = source of truth
    const { text: enText } = extractSection(raw, "en");
    const enPosts = extractPosts(enText).map(parsePost).slice(0, COUNT);
    console.log(`   ${enPosts.length} EN posts to translate`);

    // Keep existing target posts beyond COUNT
    const { text: tgtText } = extractSection(raw, TARGET_LANG);
    const existingPosts = extractPosts(tgtText || "").map(parsePost);
    const keepPosts = existingPosts.slice(COUNT);

    const done = [];

    for (let i = 0; i < enPosts.length; i++) {
        const p = enPosts[i];
        console.log(`\n   [${i + 1}/${enPosts.length}] ${p.title}`);

        const [title, excerpt, authorName, authorRole] = await Promise.all([
            txText(p.title),
            txText(p.excerpt),
            txText(p.authorName),
            txText(p.authorRole),
        ]);

        console.log(`      → "${title.slice(0, 60)}"`);
        process.stdout.write(`      Translating HTML body...`);
        const contentHtml = await txHtml(p.contentHtml);
        process.stdout.write(` ✅\n`);

        done.push(buildPost({ ...p, title, excerpt, authorName, authorRole, contentHtml }));
        saveToDisk(done, keepPosts);
        console.log(`      💾 Saved (${i + 1}/${enPosts.length})`);

        if (i < enPosts.length - 1) await sleep(300);
    }

    console.log(`\n✅ ${done.length} posts translated → "${TARGET_LANG}" section updated.`);
})();
