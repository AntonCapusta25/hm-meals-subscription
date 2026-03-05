/**
 * remap-slugs-to-en.mjs
 *
 * INSTANT — no API calls.
 * Replaces slugs in nl/fr/ar/hi sections with the corresponding EN slugs
 * (position-based: post[i] in each language gets EN post[i]'s slug).
 *
 * This makes /nl/blog/ultimate-guide... show the Dutch post,
 * /fr/blog/ultimate-guide... show the French post, etc.
 *
 * Run: node scripts/remap-slugs-to-en.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_FILE = join(__dirname, "../src/lib/blogData.ts");
const ALL_LANGS = ["nl", "en", "fr", "ar", "hi"];
const TARGET_LANGS = ["nl", "fr", "ar", "hi"];

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

function getSlug(ps) { const m = ps.match(/slug:\s*["']([^"']+)["']/); return m ? m[1] : ""; }
function replaceSlug(ps, newSlug) {
    return ps.replace(/(\bslug:\s*["'])([^"']+)(["'])/, `$1${newSlug}$3`);
}

console.log("📖 Reading blogData.ts...");
let raw = readFileSync(BLOG_FILE, "utf8");

// Get EN slugs (source of truth)
const { text: enText } = extractSection(raw, "en");
const enPosts = extractPosts(enText);
const enSlugs = enPosts.map(getSlug);
console.log(`   EN slugs: ${enSlugs.length}`);

for (const lang of TARGET_LANGS) {
    const { text, sStart, sEnd } = extractSection(raw, lang);
    if (!text) { console.log(`   ⚠️  No "${lang}" section`); continue; }

    const posts = extractPosts(text);
    const remapped = posts.map((p, i) => {
        const enSlug = enSlugs[i];
        if (!enSlug) return p; // more posts than EN — keep original slug
        const oldSlug = getSlug(p);
        return replaceSlug(p, enSlug);
    });

    const newSection = remapped.join(",\n") + "\n    ";
    raw = raw.slice(0, sStart) + newSection + raw.slice(sEnd);
    console.log(`   ✅ "${lang}": remapped ${Math.min(posts.length, enSlugs.length)} slugs to EN equivalents`);
}

writeFileSync(BLOG_FILE, raw, "utf8");
console.log("\n✅ Done! All language sections now use EN slugs.");
console.log("   /nl/blog/ultimate-guide-hiring-private-chef-netherlands → Dutch content");
console.log("   /fr/blog/ultimate-guide-hiring-private-chef-netherlands → French content");
console.log("   /ar/blog/ultimate-guide-hiring-private-chef-netherlands → Arabic content");
console.log("   /hi/blog/ultimate-guide-hiring-private-chef-netherlands → Hindi content");
