import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { CopyLinkBtn } from "./CopyLinkBtn"; // We will create this client component

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
    // In a real database scenario, you would fetch by slug here
    return {
        title: "Vegan Dutch Recipes: Stamppot, Hachee & More | Homemade",
        description: "Expand your menu with plant-based Dutch comfort food. Get detailed recipes for vegan stamppot, mushroom hachee, and smoky erwtensoep to attract more customers.",
        openGraph: {
            images: ['https://cdn.prod.website-files.com/67ca169b9408c827cc9df356/687e83af743aca19db9f7b28_Time%20Management%20Tips%20for%20Home%20Chefs%20(5).jpg']
        }
    };
}

export default async function BlogPostTemplate({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang, slug } = await params;

    // Placeholder data that would normally come from a CMS or database
    const post = {
        title: "Embrace the Trend: How to Offer Exciting Vegan and Plant-Based Versions of Dutch Classics",
        category: "General",
        readTime: "5 Min Read",
        publishedAt: "October 14, 2025",
        author: {
            name: "Homemade Team",
            role: "Content Team",
            image: "/images/chefs/ron.png", // Using an existing local image
        },
        heroImage: "https://cdn.prod.website-files.com/67ca169b9408c827cc9df356/687e83af743aca19db9f7b28_Time%20Management%20Tips%20for%20Home%20Chefs%20(5).jpg",
    };

    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover scale-105"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E19] via-[#0F1E19]/60 to-transparent opacity-90"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-32">
                    <Link
                        className="inline-flex items-center gap-2 text-white/80 hover:text-[#F47A44] transition-colors mb-8 font-medium backdrop-blur-md bg-white/10 px-5 py-2 rounded-full border border-white/10"
                        href={`/${lang}/blog`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                        Back to Blog
                    </Link>
                    <div>
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-bold tracking-wider uppercase text-[#F47A44]">
                            <span className="bg-[#F47A44]/20 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-[#F47A44]/30">{post.category}</span>
                            <span className="text-white/60">•</span>
                            <span className="text-white flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                                    <path d="M12 6v6l4 2"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                {post.readTime}
                            </span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-white/90 border-t border-white/20 pt-6">
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F47A44]">
                                    <Image
                                        src={post.author.image}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-lg leading-none">{post.author.name}</p>
                                    <p className="text-white/60 text-sm">{post.author.role}</p>
                                </div>
                            </div>
                            <div className="h-10 w-px bg-white/20 mx-2"></div>
                            <div className="flex flex-col">
                                <span className="text-white/60 text-xs uppercase tracking-widest">Published</span>
                                <span className="font-medium text-lg">{post.publishedAt}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content & Sidebar */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">

                {/* Social Share Sidebar */}
                <aside className="hidden lg:block lg:col-span-1">
                    <div className="flex flex-col gap-4 sticky top-32">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F47A44]/10 text-[#F47A44] mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                        </div>
                        <a target="_blank" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2]/20 transition-colors shadow-sm" aria-label="Visit us on Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=https://homemadechefs.com/blog/${slug}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a target="_blank" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:border-black/20 transition-colors shadow-sm" aria-label="Visit us on X (Twitter)" href={`https://twitter.com/intent/tweet?url=https://homemadechefs.com/blog/${slug}&text=${post.title}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <CopyLinkBtn slug={slug} />
                    </div>
                </aside>

                {/* Article Body */}
                <article className="lg:col-span-8">
                    <div className="prose prose-xl prose-stone max-w-none prose-headings:font-serif prose-headings:text-[#0F1E19] prose-headings:font-bold prose-p:text-[#0F1E19]/80 prose-p:leading-loose prose-a:text-[#F47A44] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-[#F47A44] prose-blockquote:bg-[#F47A44]/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-img:rounded-2xl prose-img:shadow-xl first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#F47A44] first-letter:mr-3 first-letter:float-left">
                        <h2>Embrace the Trend: How to Offer Exciting Vegan and Plant-Based Versions of Dutch Classics</h2>

                        <p>There's a certain kind of warmth that comes from a classic Dutch meal. It’s the feeling of <em>gezelligheid</em> in a bowl—a hearty <em>stamppot</em> on a chilly evening, a rich and fragrant <em>hachee</em> that has been simmering for hours, or a thick, spoon-standing <em>erwtensoep</em> that tastes like tradition itself. These are the dishes that many of us grew up with, the flavors that feel like home. But in today's culinary world, the definition of "home cooking" is beautifully expanding.</p>

                        <p>A powerful and undeniable shift is happening at the dinner table. More and more people across the Netherlands are embracing plant-based eating—for their health, for the environment, and for ethical reasons. For a home chef, this isn't a limitation to be navigated; it is a massive and exciting opportunity. Veganizing Dutch classics isn't about taking something away from these beloved dishes. It’s about using creativity and new techniques to add a new, delicious dimension to them. It's about innovation that allows you to welcome even more people to your table.</p>

                        <p>This guide will provide you with the practical, recipe-focused steps to transform three iconic Dutch comfort foods into spectacular plant-based masterpieces. These dishes are designed to satisfy the cravings of seasoned vegans and pleasantly surprise even the most devout meat-eaters, positioning your kitchen at the forefront of modern Dutch cuisine.</p>

                        <h2>The Vegan Dutch Kitchen: Your Toolkit for Success</h2>

                        <p>Before we dive into the recipes, let's establish a few key principles. Successfully veganizing hearty, meat-centric dishes comes down to mastering three things: savory depth (umami), richness, and texture.</p>

                        <ul>
                            <li><strong>Achieving <em>Hartigheid</em> (Savory Depth):</strong> The biggest challenge when removing meat is replacing its deep, savory flavor. Your pantry is your best friend here.
                                <ul>
                                    <li><strong>Umami Boosters:</strong> Mushrooms (especially dried shiitake or fresh chestnuts), soy sauce or tamari, miso paste, tomato purée, and nutritional yeast ("nooch") are essential for adding a complex, savory base.</li>
                                    <li><strong>Smoky Notes:</strong> Smoked paprika, a few drops of liquid smoke, or chipotle paste are crucial for replicating the smoky flavor traditionally provided by bacon (<em>spekjes</em>) or smoked sausage (<em>rookworst</em>).</li>
                                </ul>
                            </li>
                            <li><strong>Replicating Richness and Fat:</strong> The satisfying mouthfeel of classic Dutch food often comes from animal fats like butter or lard.
                                <ul>
                                    <li><strong>Your Go-To Fats:</strong> High-quality plant-based butter (<em>plantaardige boter</em>), olive oil for sautéing, and full-fat coconut milk or homemade cashew cream for finishing sauces and soups will provide the richness you need.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Author Box Block */}
                    <div className="bg-[#E6DCC3]/20 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 mt-16 border border-[#E6DCC3]/50">
                        <div className="relative w-24 h-24 flex-shrink-0">
                            <div className="absolute inset-0 bg-[#F47A44] rounded-full opacity-10 scale-110"></div>
                            <Image
                                src={post.author.image}
                                alt={post.author.name}
                                fill
                                className="object-cover rounded-full border-2 border-white shadow-md"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <span className="text-[#F47A44] font-bold text-xs uppercase tracking-wider mb-1 block">Written By</span>
                            <h4 className="font-serif text-xl font-bold text-[#0F1E19]">{post.author.name}</h4>
                            <p className="text-[#0F1E19]/60 text-sm mt-1">{post.author.role}</p>
                            <p className="text-[#0F1E19]/70 text-sm mt-3 leading-relaxed">
                                Passionate about sharing insights on culinary trends and kitchen management. Bringing you the latest updates from the heart of the industry.
                            </p>
                        </div>
                    </div>
                </article>

                {/* Related Articles Array */}
                <div className="lg:col-span-3">
                    <div className="sticky top-32">
                        <h3 className="font-serif text-2xl font-bold text-[#0F1E19] mb-6 border-b border-[#0F1E19]/10 pb-4">Related Articles</h3>
                        <div className="flex flex-col gap-8">

                            <Link href={`/${lang}/blog/securing-your-first-customer`} className="group block">
                                <div className="relative h-40 mb-4 overflow-hidden rounded-xl">
                                    <Image
                                        src="https://cdn.prod.website-files.com/67ca169b9408c827cc9df356/6809b26e8141cc203324666f_67ca169b9408c827cc9df375_image16.jpeg"
                                        alt="Securing Your First Customer"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <span className="text-[#F47A44] text-xs font-bold uppercase tracking-wider">General</span>
                                <h4 className="font-serif text-lg font-bold text-[#0F1E19] mt-2 group-hover:text-[#F47A44] transition-colors leading-snug">
                                    Securing Your First Customer: An Advanced Guide by Homemade
                                </h4>
                            </Link>

                            <Link href={`/${lang}/blog/food-truck-netherlands`} className="group block">
                                <div className="relative h-40 mb-4 overflow-hidden rounded-xl">
                                    <Image
                                        src="https://cdn.prod.website-files.com/67ca169b9408c827cc9df356/6911bcaccd9df5355ac90e32_Homemade%20Chefs%20-%20Blog%20Banner%20(20).png"
                                        alt="Food Truck Business"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <span className="text-[#F47A44] text-xs font-bold uppercase tracking-wider">General</span>
                                <h4 className="font-serif text-lg font-bold text-[#0F1E19] mt-2 group-hover:text-[#F47A44] transition-colors leading-snug">
                                    How to Open a Food Truck Business in the Netherlands (2025 Edition)
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
