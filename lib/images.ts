/**
 * Fotky webu — VŠECHNY se mění tady.
 *
 * Reálné fotky Glampidolu jsou v public/images/. Pokud přidáte nové:
 * 1. Nahrajte je do public/images/ (např. public/images/sauna.jpg)
 * 2. Změňte `src` na lokální cestu, např. "/images/sauna.jpg"
 * 3. Upravte alt text, pokud je potřeba
 *
 * Hero fotka je lokální v public/images/hero.png (importuje se v Hero.tsx).
 */

export type SiteImage = {
  src: string;
  alt: string;
};

export const IMAGES = {
  cabinExterior: {
    src: "/images/domecek-v-sadu.jpg",
    alt: "Dřevěný domeček s finskou saunou uprostřed trnkového sadu",
  },
  cabinForest: {
    src: "/images/drevena-fasada.jpg",
    alt: "Dřevěná fasáda domečku a terasa s posezením",
  },
  interior: {
    src: "/images/interier.jpg",
    alt: "Světlý interiér s velkými okny a výhledem do sadu",
  },
  living: {
    src: "/images/obyvaci-cast.jpg",
    alt: "Obývací část s pohovkou a výhledem do sadu",
  },
  kitchen: {
    src: "/images/kuchyne.jpg",
    alt: "Vybavený kuchyňský kout s oknem do sadu",
  },
  bathroom: {
    src: "/images/koupelna.jpg",
    alt: "Koupelna se sprchovým koutem, umyvadlem a kulatým zrcadlem",
  },
  sauna: {
    src: "/images/sauna.jpg",
    alt: "Interiér finské sauny s kamny a obloukovým oknem do krajiny",
  },
  firepit: {
    src: "/images/ohniste.jpg",
    alt: "Podvečer na terase u ohniště a grilu",
  },
  grill: {
    src: "/images/vecere-terasa.jpg",
    alt: "Prostřená večeře na terase při západu slunce",
  },
  orchard: {
    src: "/images/sad-zapad.jpg",
    alt: "Zlaté světlo nad trnkovým sadem při západu slunce",
  },
  hillsView: {
    src: "/images/vyhled-kopce.jpg",
    alt: "Výhled z terasy do údolí a Vizovických vrchů",
  },
  forest: {
    src: "/images/rozhled.jpg",
    alt: "Rozhled z terasy do okolních kopců a údolí",
  },
  tentView: {
    src: "/images/terasa-zapad.jpg",
    alt: "Terasa s posezením a výhledem do sadu při západu slunce",
  },
} satisfies Record<string, SiteImage>;
