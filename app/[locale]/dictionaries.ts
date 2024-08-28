import "server-only";

export type Locales = "en" | "pl";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  pl: () => import("@/dictionaries/pl.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locales) => dictionaries[locale]();
