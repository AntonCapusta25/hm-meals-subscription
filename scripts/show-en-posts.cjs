const fs = require('fs');
const raw = fs.readFileSync('src/lib/blogData.ts', 'utf8');
const enStart = raw.indexOf('"en": [') + '"en": ['.length;
let depth = 0, s = -1, inTpl = false, inStr = false, sc = '', esc = false, count = 0;
const posts = [];
for (let i = enStart; i < raw.length && count < 10; i++) {
    const c = raw[i];
    if (esc) { esc = false; continue; } if (c === '\\') { esc = true; continue; }
    if (inTpl) { if (c === '`') inTpl = false; continue; }
    if (inStr) { if (c === sc) inStr = false; continue; }
    if (c === '`') { inTpl = true; continue; } if (c === '"' || c === "'") { inStr = true; sc = c; continue; }
    if (c === '{') { if (depth === 0) s = i; depth++; }
    else if (c === '}') { depth--; if (depth === 0 && s !== -1) { posts.push(raw.slice(s, i + 1)); s = -1; count++; } }
}
posts.forEach((p, i) => {
    const title = p.match(/title:\s*["']([^"']+)["']/)?.[1];
    const excerpt = p.match(/excerpt:\s*["']([^"']*?)["']/)?.[1];
    const slug = p.match(/slug:\s*["']([^"']+)["']/)?.[1];
    const html = p.match(/contentHtml:\s*`([\s\S]*?)`\s*\n\s*\}/)?.[1] || '';
    const unique = html.split('<div class="mt-16')[0].trim();
    console.log('=== POST ' + (i + 1) + ' ===');
    console.log('SLUG: ' + slug);
    console.log('TITLE: ' + title);
    console.log('EXCERPT: ' + excerpt);
    console.log('UNIQUE HTML (' + unique.length + ' chars):');
    console.log(unique);
    console.log('---END---\n');
});
