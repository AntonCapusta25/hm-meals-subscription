import { MetadataRoute } from 'next'
import { locales, Locale } from '@/i18n/config'
import { BLOG_POSTS_I18N, BlogPost } from '@/lib/blogData'

// Helper to get the canonical URL for a specific language
function getUrl(lang: string, path: string = '') {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://catering.homemadechefs.com'
    return `${baseUrl}/${lang}${path ? `/${path}` : ''}`
}

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = []

    // Define our base static routes
    const staticRoutes = [
        '',
        'catering',
        'thuiskok-amsterdam',
        'thuiskok-rotterdam',
        'zakelijke-catering-amsterdam',
        'faq',
        'menus/all',
        'about-us',
        'blog',
        'contact',
    ]

    // Our heavily targeted operational cities
    const supportedCities = [
        'amsterdam',
        'rotterdam',
        'enschede',
        'den-haag',
        'haarlem',
        'hengelo',
        'groningen',
        'utrecht',
        'leiden'
    ];

    // Add all cities into the static routes
    supportedCities.forEach(city => staticRoutes.push(city));

    // Add static routes and their alternates
    staticRoutes.forEach((route) => {
        // Generate alternate links for each language
        const alternates: Record<string, string> = {}
        locales.forEach((locale: Locale) => {
            alternates[locale] = getUrl(locale, route)
        })

        // Add entry for each language
        locales.forEach((locale: Locale) => {
            sitemapEntries.push({
                url: getUrl(locale, route),
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1.0 : (supportedCities.includes(route) ? 0.9 : 0.8),
                alternates: {
                    languages: alternates
                }
            })
        })
    })

    // Add Dynamic Blog Posts
    // Group them by their index (as they are identically aligned in batch generation)
    // or by the slug prefix if possible. Since the slugs are translated, index is safest.
    // The English array forms our definitive list of "post entities".
    const baseLocalePosts = BLOG_POSTS_I18N['en'] || [];

    baseLocalePosts.forEach((enPost, index) => {
        // Build the alternates linking all 5 languages for *this* specific post
        const alternates: Record<string, string> = {};

        locales.forEach((locale: Locale) => {
            const localizedPosts = BLOG_POSTS_I18N[locale] as BlogPost[];
            if (localizedPosts && localizedPosts[index]) {
                alternates[locale] = getUrl(locale, `blog/${localizedPosts[index].slug}`);
            }
        });

        // Now inject the actual sitemap entries for this specific post across all languages
        locales.forEach((locale: Locale) => {
            const localizedPosts = BLOG_POSTS_I18N[locale] as BlogPost[];
            if (localizedPosts && localizedPosts[index]) {
                const targetSlug = localizedPosts[index].slug;
                sitemapEntries.push({
                    url: getUrl(locale, `blog/${targetSlug}`),
                    lastModified: new Date(), // Could be parsed from publishedAt if normalized
                    changeFrequency: 'monthly',
                    priority: 0.7,
                    alternates: {
                        languages: alternates
                    }
                });
            }
        });
    });

    return sitemapEntries
}
