"use client";

import { useI18n } from "@/contexts/I18nContext";
import Image from "next/image";

export default function Footer() {
    const { dictionary } = useI18n();
    const t = (dictionary as any)?.footer || {};

    return (
        <footer className="bg-dark text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <div className="relative w-32 h-12 mb-4 mx-auto md:mx-0">
                        <Image
                            src="/images/logo-homemade.png"
                            alt="Homemade Logo"
                            width={128}
                            height={48}
                            className="object-contain w-full h-full brightness-0 invert"
                        />
                    </div>
                    <p className="text-white/60 text-sm">
                        {t.copyright || "© 2026 Homemade. All rights reserved."}
                    </p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-white/80">
                    <a href="#" className="hover:text-orange transition-colors">
                        {t.terms || "Terms"}
                    </a>
                    <a href="#" className="hover:text-orange transition-colors">
                        {t.privacy || "Privacy"}
                    </a>
                    <a href="#" className="hover:text-orange transition-colors">
                        {t.contact || "Contact"}
                    </a>
                </div>
            </div>
        </footer>
    );
}
