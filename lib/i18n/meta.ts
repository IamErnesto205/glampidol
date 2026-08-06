import type { Locale } from "./types";

/**
 * Popisky jazyků pro přepínač v hlavičce.
 *
 * Schválně mimo slovníky: Header je klientská komponenta a importem
 * celých slovníků by se všechny tři jazyky natáhly do JS bundlu.
 */
export const DICTIONARIES_META: Record<
  Locale,
  { short: string; name: string }
> = {
  cs: { short: "CZ", name: "Čeština" },
  en: { short: "EN", name: "English" },
  de: { short: "DE", name: "Deutsch" },
};
