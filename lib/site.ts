export const SITE_NAME = "Glampidol";

/** Základ pro absolutní URL v metadatech (OG obrázky, canonical, hreflang). */
export const SITE_URL = "https://glampidol.cz";

/**
 * Navigace — kotvy jsou stejné ve všech jazycích, popisky se berou
 * ze slovníku podle `key` (viz lib/i18n/*.ts, sekce `nav`).
 */
export const NAV_ITEMS = [
  { key: "cabin", hash: "#domecek" },
  { key: "sauna", hash: "#sauna" },
  { key: "surroundings", hash: "#okoli" },
  { key: "gallery", hash: "#galerie" },
  { key: "pricing", hash: "#cenik" },
  { key: "faq", hash: "#faq" },
  { key: "contact", hash: "#kontakt" },
] as const;

export const RESERVATION_HASH = "#rezervace";

/**
 * Rezervace probíhají přes inzerát na e-chalupy.cz — web sám žádný
 * rezervační formulář nemá. Při změně inzerátu stačí přepsat tuto adresu.
 */
export const BOOKING_URL =
  "https://www.e-chalupy.cz/ubytovani-lipa-glampidol-o5238";

/** Veřejný profil s hodnocením hostů — odkaz pod recenzemi. */
export const REVIEWS_URL =
  "https://www.e-chalupy.cz/recenze/ubytovani-lipa-glampidol-5238";

export const CONTACT = {
  phone: "+420 736 246 038",
  email: "glampidolcz@gmail.com",
  location: "Lípa, Zlínský kraj",
} as const;
