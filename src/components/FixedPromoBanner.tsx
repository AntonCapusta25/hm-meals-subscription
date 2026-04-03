"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/contexts/I18nContext";

const STORAGE_KEY = "promoBannerDismissed";

export default function FixedPromoBanner() {
    const { dictionary } = useI18n();
    const t = (dictionary as any)?.promoBanner || {};
    const pathname = usePathname();
    const lang = pathname?.split("/")[1] || "en";

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem(STORAGE_KEY);
        setVisible(dismissed !== "true");
    }, []);

    const dismiss = () => {
        localStorage.setItem(STORAGE_KEY, "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-5xl px-4 pointer-events-none">
            <div className="bg-[#0F1E19] text-white rounded-xl md:rounded-2xl shadow-2xl p-1.5 md:px-6 md:py-3 flex flex-row items-center justify-between gap-1.5 md:gap-8 border border-[#F47A44]/20 pointer-events-auto relative overflow-hidden">
                <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                    <span className="relative flex h-2 w-2 md:h-3 md:w-3 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F47A44] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-[#F47A44]" />
                    </span>
                    <span className="font-bold text-[#F47A44] uppercase tracking-wider text-[10px] md:text-sm whitespace-nowrap">
                        {t.badge || "Limited Spots"}
                    </span>
                </div>

                <div className="flex flex-row items-center justify-center flex-1 text-center min-w-0">
                    <span className="font-serif font-bold text-lg md:text-xl leading-tight whitespace-nowrap hidden md:inline mr-4">
                        {t.headline || "50% Off at Launch"}
                    </span>
                    <span className="text-[10px] md:text-sm text-[#F47A44] font-mono font-bold tracking-widest bg-black/20 px-2 py-1 md:px-3 md:py-1 rounded-md whitespace-nowrap">
                        {t.subline || "Join the waitlist today"}
                    </span>
                </div>

                <div className="flex items-center gap-1.5 md:gap-4 shrink-0">
                    <Link
                        href={`/${lang}/quote`}
                        className="px-3 py-2 md:px-6 md:py-2.5 bg-[#F47A44] hover:bg-[#E86825] text-white text-[10px] md:text-sm font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1 md:gap-2 shadow-lg shadow-orange-900/20 whitespace-nowrap"
                    >
                        {t.cta || "Join Waitlist"}
                        <ArrowRight className="hidden md:block" size={12} />
                    </Link>
                    <button
                        onClick={dismiss}
                        className="p-1 md:p-2 hover:bg-white/10 rounded-full transition-colors shrink-0"
                        aria-label="Close"
                    >
                        <X className="text-white/60 md:w-[18px] md:h-[18px]" size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}
