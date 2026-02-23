"use client";

import React, { createContext, useContext } from "react";
import { Locale } from "@/i18n/config";

// We'll define a basic dictionary type based on our en.json
export type Dictionary = {
    navigation: {
        howItWorks: string;
        menu: string;
        about: string;
        faq: string;
        bookNow: string;
    };
    // We will add more sections here as we extract them
};

type I18nContextType = {
    lang: Locale;
    dictionary: Dictionary;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
    children,
    lang,
    dictionary,
}: {
    children: React.ReactNode;
    lang: Locale;
    dictionary: Dictionary;
}) {
    return (
        <I18nContext.Provider value={{ lang, dictionary }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}
