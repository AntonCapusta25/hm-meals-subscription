const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '../src/lib/blogData.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf8');

const locales = ['nl', 'en', 'fr', 'ar', 'hi'];

for (const locale of locales) {
    let allPostsForLocale = [];

    // Read batch 1
    const batch1Path = path.join(__dirname, `../${locale}_batch_1.json`);
    if (fs.existsSync(batch1Path)) {
        console.log(`Found ${batch1Path}`);
        const batch1Data = JSON.parse(fs.readFileSync(batch1Path, 'utf8'));
        allPostsForLocale = allPostsForLocale.concat(batch1Data);
    }

    // Read batch 2
    const batch2Path = path.join(__dirname, `../${locale}_batch_2.json`);
    if (fs.existsSync(batch2Path)) {
        console.log(`Found ${batch2Path}`);
        const batch2Data = JSON.parse(fs.readFileSync(batch2Path, 'utf8'));
        allPostsForLocale = allPostsForLocale.concat(batch2Data);
    }

    if (allPostsForLocale.length > 0) {
        console.log(`Injecting ${allPostsForLocale.length} posts for locale: ${locale}`);

        // Find the array for the locale
        const regex = new RegExp(`\\s+${locale}:\\s*\\[`);
        const match = tsContent.match(regex);

        if (match) {
            const startIndex = match.index + match[0].length;

            let formattedPosts = '';
            for (const post of allPostsForLocale) {
                const category = post.category || 'Exclusive Guides';
                const readTime = post.readTime || '6 min read';
                // Depending on locale, adjust publishedAt slightly
                let publishedAt = 'Feb 25, 2026';
                if (locale === 'nl') publishedAt = '25 Feb, 2026';
                if (locale === 'fr') publishedAt = '25 Fév, 2026';
                if (locale === 'ar') publishedAt = '25 فبراير 2026';
                if (locale === 'hi') publishedAt = '25 फ़रवरी 2026';

                // Construct the object string manually to ensure it's valid TS
                const title = JSON.stringify(post.title);
                const slug = JSON.stringify(post.slug);
                const cat = JSON.stringify(category);
                const rt = JSON.stringify(readTime);
                const pa = JSON.stringify(publishedAt);
                const ex = JSON.stringify(post.excerpt);
                const img = JSON.stringify(post.image);
                const authorName = JSON.stringify(post.author.name);
                const authorRole = JSON.stringify(post.author.role);
                // For HTML, use backticks and escape backticks and ${
                const html = post.contentHtml.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\\$\\{/g, '\\\\${');

                formattedPosts += `
        {
            title: ${title},
            slug: ${slug},
            category: ${cat},
            readTime: ${rt},
            publishedAt: ${pa},
            excerpt: ${ex},
            image: ${img},
            author: { name: ${authorName}, role: ${authorRole} },
            contentHtml: \`${html}\`
        },`;
            }

            tsContent = tsContent.slice(0, startIndex) + formattedPosts + tsContent.slice(startIndex);
        } else {
            console.error(`Could not find array for locale: ${locale}`);
        }
    }
}

fs.writeFileSync(tsFilePath, tsContent);
console.log('Injection complete. Please run "npm run build" to check compilation.');
