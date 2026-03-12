"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/contexts/I18nContext";
import { usePathname } from 'next/navigation';
import { trackCTAClick } from "@/lib/analytics";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'en';
    const [bookingLink, setBookingLink] = useState(`/${lang}/quote`);

    // Fallbacks incase dictionary misses keys
    const i18n = useI18n();
    const t = i18n?.dictionary?.navigation || {
        howItWorks: "How it Works",
        menu: "Menus",
        occasions: "Occasions",
        bookNow: "Book Now"
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Check for Typeform config
        const updateLink = () => {
            const saved = localStorage.getItem('formConfig');
            if (saved) {
                const config = JSON.parse(saved);
                if (config.useTypeform && config.typeformUrl) {
                    setBookingLink(config.typeformUrl);
                } else {
                    setBookingLink(`/${lang}/quote`);
                }
            }
        };

        updateLink();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("storage", updateLink); // Listen for admin changes

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("storage", updateLink);
        };
    }, [lang]);

    const navLinks = [
        { href: `/${lang}#how-it-works`, label: t.howItWorks || "How it Works" },
        { href: `/${lang}#menu-boxes`, label: t.menu || "Menus" },
        { href: `/${lang}#occasions`, label: (i18n?.dictionary as any)?.occasions?.title || "Occasions" },
        { href: `/${lang}/blog`, label: (t as any).blog || "Blog" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-50 rounded-full px-4 md:px-6 py-2.5 flex justify-between items-center transition-all duration-300 border border-white/20 ${scrolled || isOpen
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-white/90 backdrop-blur-sm shadow-sm"
                    }`}
            >
                <div className="flex-1 flex justify-start">
                    <Link href={`/${lang}`} className="flex items-center gap-2">
                        {/* Logo */}
                        <div className="h-8 md:h-9 w-auto">
                            <Image
                                src="/images/logo-new.png"
                                alt="Homemade Logo"
                                width={150}
                                height={36}
                                className="h-full w-auto object-contain rounded-md"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                <div className="hidden md:flex flex-none justify-center items-center gap-8 text-light font-medium text-sm tracking-wide">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-orange transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
                    <div className="hidden sm:block">
                        <LanguageSwitcher />
                    </div>

                    <Link
                        href={bookingLink}
                        target={bookingLink.startsWith('http') ? "_blank" : "_self"}
                        onClick={() => trackCTAClick("Book Now", "navbar")}
                        className="bg-orange hover:bg-orange/90 text-white px-4 md:px-5 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-wide shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                    >
                        <span className="md:hidden">Book</span>
                        <span className="hidden md:inline">{t.bookNow || "Book Now"}</span>
                    </Link>

                    {/* Burger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-dark hover:text-orange transition-colors relative z-50"
                        aria-label="Toggle Menu"
                    >
                        <div className="w-5 flex flex-col gap-1.5">
                            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden bg-white pt-24 px-8"
                    >
                        <div className="flex flex-col gap-6 text-xl font-bold text-dark mt-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-orange transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-500">Language / Taal</span>
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
