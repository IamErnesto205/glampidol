import { IMAGES, type ImageKey } from "./images";

/**
 * Obsah nezávislý na jazyce.
 *
 * Všechny texty (ceník, FAQ, benefity, vybavení, recenze, popisky výletů)
 * jsou ve slovnících v lib/i18n/. Tady zůstávají jen věci, které se
 * napříč jazyky nemění: odkazy, cesty k fotkám a licenční kredity.
 */

/**
 * Tipy na výlety — pořadí musí sedět s polem `trips` ve slovnících.
 *
 * Fotky jsou z Wikimedia Commons pod volnou licencí, proto u každé drží
 * autora a licenci pole `credit` — vypisuje se v patičce a je podmínkou
 * jejich použití. Když fotku vyměníte za vlastní, `credit` smažte.
 */
export type TripMeta = {
  href: string;
  src: string;
  credit?: { author: string; license: string };
};

export const TRIP_META: readonly TripMeta[] = [
  {
    href: "https://www.zoozlin.eu/",
    src: "/images/trips/zoo-lesna.jpg",
    credit: { author: "ŠJů", license: "CC BY 4.0" },
  },
  {
    href: "https://www.lazneluhacovice.cz/",
    src: "/images/trips/luhacovice.jpg",
    credit: { author: "Txllxt TxllxT", license: "CC BY-SA 4.0" },
  },
  {
    href: "https://www.stezazlin.cz/koupaliste-zelene",
    src: "/images/trips/koupaliste-zelene.jpg",
    credit: { author: "ŠJů", license: "CC BY 4.0" },
  },
  {
    href: "https://www.turistika.cz/mista/terasova-vyhlidka-nad-lipou/detail",
    src: "/images/trips/lipske-paseky.jpg",
    credit: { author: "Packa", license: "CC BY-SA 3.0" },
  },
];

/** Galerie na hlavní straně — jeden velký záběr + čtyři dlaždice. */
export const GALLERY_FEATURED: ImageKey = "cabinExterior";
export const GALLERY_TILES: ImageKey[] = [
  "sauna",
  "interior",
  "hillsView",
  "firepit",
];

export { IMAGES };
