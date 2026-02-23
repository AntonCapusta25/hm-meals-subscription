import "server-only";
import { Locale } from "./config";

const dictionaries = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    nl: () => import("./dictionaries/nl.json").then((module) => module.default),
    fr: () => import("./dictionaries/fr.json").then((module) => module.default),
    ar: () => import("./dictionaries/ar.json").then((module) => module.default),
    hi: () => import("./dictionaries/hi.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en();
