import type { cs } from "./cs";

/**
 * Struktura slovníku odvozená z české verze — ta je zdroj pravdy.
 * Proto v cs.ts záměrně není `as const`: klíče by se zúžily na literály
 * a překlady by pak neprošly typovou kontrolou.
 */
export type Dictionary = typeof cs;

export const LOCALES = ["cs", "en", "de"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "cs";

export const hasLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);
