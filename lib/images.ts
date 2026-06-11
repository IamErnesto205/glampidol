/**
 * Placeholder fotky webu — VŠECHNY se mění tady.
 *
 * Až budou reálné fotky Glampidolu:
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

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1600&q=80&auto=format&fit=crop`;

export const IMAGES = {
  cabinExterior: {
    src: unsplash("photo-1542718610-a1d656d1884c"),
    alt: "Dřevěná chata na kopci při zlatém západu slunce",
  },
  cabinForest: {
    src: unsplash("photo-1587061949409-02df41d5e562"),
    alt: "Srubový domek obklopený stromy",
  },
  interior: {
    src: unsplash("photo-1499916078039-922301b0eb9b"),
    alt: "Světlý interiér s velkými okny a postelí",
  },
  living: {
    src: unsplash("photo-1513694203232-719a280e022f"),
    alt: "Obývací část s pohovkou",
  },
  kitchen: {
    src: unsplash("photo-1484154218962-a197022b5858"),
    alt: "Vybavený kuchyňský kout",
  },
  bathroom: {
    src: unsplash("photo-1552321554-5fefe8c9ef14"),
    alt: "Koupelna se sprchovým koutem a umyvadlem",
  },
  sauna: {
    src: unsplash("photo-1583416750470-965b2707b355"),
    alt: "Interiér finské sauny s dřevěnými lavicemi",
  },
  firepit: {
    src: unsplash("photo-1478131143081-80f7f84ca84d"),
    alt: "Večerní posezení u ohniště",
  },
  grill: {
    src: unsplash("photo-1555939594-58d7cb561ad1"),
    alt: "Grilované dobroty připravené k večeři",
  },
  orchard: {
    src: unsplash("photo-1500382017468-9049fed747ef"),
    alt: "Zlaté světlo nad sadem při západu slunce",
  },
  hillsView: {
    src: unsplash("photo-1494548162494-384bba4ab999"),
    alt: "Výhled do kopců při západu slunce",
  },
  forest: {
    src: unsplash("photo-1473773508845-188df298d2d1"),
    alt: "Les Vizovických vrchů z výšky",
  },
  tentView: {
    src: unsplash("photo-1532339142463-fd0a8979791a"),
    alt: "Ranní výhled do rozkvetlých kopců",
  },
} satisfies Record<string, SiteImage>;
