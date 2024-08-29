import "server-only";

export type Locales = "en" | "pl";

const dictionaries: Record<Locales, () => Promise<any>> = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  pl: () => import("@/dictionaries/pl.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locales) => {
  const dictionaryFunction = dictionaries[locale];
  if (typeof dictionaryFunction === "function") {
    return dictionaryFunction();
  } else {
    throw new Error(`dictionaries[${locale}] is not a function`);
  }
};
