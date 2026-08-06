/**
 * Fotky webu — VŠECHNY se mění tady.
 *
 * Tady jsou jen cesty k souborům. Alt texty a popisky do galerie jsou
 * jazykové, takže žijí ve slovnících (lib/i18n/*.ts → `imageAlts`
 * a `imageLabels`) pod stejným klíčem.
 *
 * Hero fotka je lokální v public/images/hero.png (importuje se v Hero.tsx).
 */
export const IMAGES = {
  cabinExterior: "/images/domecek-v-sadu.jpg",
  cabinForest: "/images/drevena-fasada.jpg",
  interior: "/images/interier.jpg",
  living: "/images/obyvaci-cast.jpg",
  kitchen: "/images/kuchyne.jpg",
  bathroom: "/images/koupelna.jpg",
  sauna: "/images/sauna.jpg",
  firepit: "/images/ohniste.jpg",
  grill: "/images/vecere-terasa.jpg",
  orchard: "/images/sad-zapad.jpg",
  hillsView: "/images/vyhled-kopce.jpg",
  forest: "/images/rozhled.jpg",
  tentView: "/images/terasa-zapad.jpg",
} satisfies Record<string, string>;

export type ImageKey = keyof typeof IMAGES;
