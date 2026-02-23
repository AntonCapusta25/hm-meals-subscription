import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Blog & Insights | Homemade Catering",
    description: "Read the latest tips, tricks, and behind-the-scenes stories from the Homemade Chefs team.",
};

const BLOG_POSTS = [
    {
        title: "Embrace the Trend: How to Offer Exciting Vegan and Plant-Based Versions of Dutch Classics",
        slug: "vegan-dutch-classics",
        category: "General",
        readTime: "5 Min Read",
        publishedAt: "October 14, 2025",
        excerpt: "Expand your menu with plant-based Dutch comfort food. Get detailed recipes for vegan stamppot, mushroom hachee, and smoky erwtensoep to attract more customers.",
        image: "https://cdn.prod.website-files.com/67ca169b9408c827cc9df356/687e83af743aca19db9f7b28_Time%20Management%20Tips%20for%20Home%20Chefs%20(5).jpg"
    },
    {
        title: "Securing Your First Customer: An Advanced Guide by Homemade",
        slug: "securing-your-first-customer",
        category: "General",
        readTime: "8 Min Read",
        publishedAt: "September 20, 2025",
        excerpt: "Learn the secrets of local marketing to land your very first private dining gig and get consistently high-paying clients in your area.",
        image: "https://cdn.prod.website-files.com/67ca169b9408c827cc9df356/6809b26e8141cc203324666f_67ca169b9408c827cc9df375_image16.jpeg"
    },
    {
        title: "How to Open a Food Truck Business in the Netherlands (2025 Edition)",
        slug: "food-truck-netherlands",
        category: "General",
        readTime: "12 Min Read",
        publishedAt: "August 5, 2025",
        excerpt: "Everything you need to know about permits, regulations, KVK registration, and location scouting to successfully run a food truck in the Netherlands.",
        image: "https://cdn.prod.website-files.com/67ca169b9408c827cc9df356/6911bcaccd9df5355ac90e32_Homemade%20Chefs%20-%20Blog%20Banner%20(20).png"
    }
];

export default async function BlogIndexPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#0F1E19] mb-6">
                    Homemade <span className="text-[#F47A44]">Journal</span>
                </h1>
                <p className="text-[#0F1E19]/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Insights, recipes, and success stories from our network of passionate home chefs and event caterers.
                </p>
            </section>

            {/* Featured Post (First item in array) */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <Link href={`/${lang}/blog/${BLOG_POSTS[0].slug}`} className="group relative rounded-3xl overflow-hidden shadow-2xl block h-[500px] w-full">
                    <Image
                        src={BLOG_POSTS[0].image}
                        alt={BLOG_POSTS[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E19] via-[#0F1E19]/40 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl text-white">
                        <div className="flex gap-4 mb-4">
                            <span className="bg-[#F47A44] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{BLOG_POSTS[0].category}</span>
                            <span className="text-white/80 text-sm font-medium flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                {BLOG_POSTS[0].readTime}
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-orange-200 transition-colors">
                            {BLOG_POSTS[0].title}
                        </h2>
                        <p className="text-white/80 text-lg line-clamp-2 md:line-clamp-none max-w-2xl">
                            {BLOG_POSTS[0].excerpt}
                        </p>
                    </div>
                </Link>
            </section>

            {/* Grid of Remaining Posts */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <h3 className="font-serif text-3xl font-bold text-[#0F1E19] mb-12 border-b border-black/10 pb-4">Latest Articles</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {BLOG_POSTS.slice(1).map((post) => (
                        <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-black/5">
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-[#F47A44] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
                                    <span>{post.publishedAt}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h4 className="font-serif text-2xl font-bold text-[#0F1E19] mb-4 leading-snug group-hover:text-[#F47A44] transition-colors">
                                    {post.title}
                                </h4>
                                <p className="text-[#0F1E19]/70 line-clamp-3 mb-6 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="text-[#F47A44] font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                    Read Article
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
