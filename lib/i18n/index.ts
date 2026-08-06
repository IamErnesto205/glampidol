import { cs } from "./cs";
import { de } from "./de";
import { en } from "./en";
import type { Dictionary, Locale } from "./types";

export { LOCALES, DEFAULT_LOCALE, hasLocale } from "./types";
export type { Dictionary, Locale } from "./types";

const DICTIONARIES: Record<Locale, Dictionary> = { cs, en, de };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

/** Odkaz na stejnou stránku v jiném jazyce — pro přepínač v hlavičce. */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}
