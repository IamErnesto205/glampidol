import { cs } from "./cs";
import { de } from "./de";
import { en } from "./en";
import { DEFAULT_LOCALE, LOCALES, type Dictionary, type Locale } from "./types";

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

/**
 * hreflang odkazy na všechny jazykové mutace stránky — pro metadata
 * i sitemapu. x-default říká Googlu, kam poslat hledající v jiném
 * jazyce: na češtinu, stejně jako přesměrování z kořene domény.
 */
export function languageAlternates(path = ""): Record<string, string> {
  return {
    ...Object.fromEntries(
      LOCALES.map((locale) => [locale, localePath(locale, path)]),
    ),
    "x-default": localePath(DEFAULT_LOCALE, path),
  };
}
