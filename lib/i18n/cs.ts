/**
 * Český slovník — zdroj pravdy pro strukturu všech jazyků.
 *
 * Typ `Dictionary` se odvozuje odtud (viz lib/i18n/index.ts), takže když
 * sem přidáte klíč, TypeScript si vyžádá překlad i v en.ts a de.ts.
 * Obrázky (`src`) zůstávají v lib/images.ts — tady jsou jen alt texty.
 */
export const cs = {
  /** Kód do <html lang=""> */
  htmlLang: "cs",
  /** Název jazyka v přepínači */
  languageName: "Čeština",

  meta: {
    title: "Glampidol | Tiny house se saunou v trnkovém sadu",
    description:
      "Soukromý glamping v Lípě u Vizovických vrchů. Tiny house pro 2 osoby + 1, finská sauna v ceně, terasa, gril, ohniště a výhledy do přírody.",
    keywords: [
      "glamping Lípa",
      "glamping Zlínský kraj",
      "tiny house Zlínský kraj",
      "glamping se saunou",
      "ubytování se saunou",
      "Vizovické vrchy",
      "romantický pobyt v přírodě",
    ],
    galleryTitle: "Fotogalerie | Glampidol",
    galleryDescription:
      "Kompletní fotogalerie Glampidolu — domeček, finská sauna, interiér, terasa a trnkový sad u Vizovických vrchů.",
    /** Popis náhledového obrázku při sdílení odkazu (public/images/og.jpg). */
    ogImageAlt:
      "Tiny house s terasou a sudovou saunou v trnkovém sadu při západu slunce",
  },

  nav: {
    cabin: "Domeček",
    sauna: "Sauna",
    surroundings: "Okolí",
    gallery: "Galerie",
    pricing: "Ceník",
    faq: "FAQ",
    contact: "Kontakt",
  },

  header: {
    book: "Rezervovat pobyt",
    openMenu: "Otevřít menu",
    closeMenu: "Zavřít menu",
    language: "Jazyk",
  },

  hero: {
    badge: "Glamping v trnkovém sadu u Vizovických vrchů",
    headlineTop: "Vypněte město.",
    headlineAccent: "Zapněte",
    headlineAccentNoWrap: "ticho sadu.",
    subheadline:
      "Soukromý tiny house s výhledem do kopců, finskou saunou a atmosférou, kvůli které se vám nebude chtít zpátky.",
    ctaPrimary: "Ověřit volný termín",
    ctaSecondary: "Prohlédnout domeček",
    scroll: "Objevte víc",
    scrollAria: "Posunout na další sekci",
    imageAlt:
      "Tiny house Glampidol se saunou v trnkovém sadu při západu slunce",
    badges: [
      "Pro 2 + 1 osobu",
      "Sauna v ceně",
      "Terasa",
      "Gril",
      "Wi-Fi",
      "Parkování u domečku",
    ],
  },

  intro: {
    eyebrow: "Vítejte v sadu",
    headline: "Ráno s výhledem. Večer v sauně.",
    headlineAccent: "Klid, který se nevejde do kalendáře.",
    text: "Uprostřed trnkového sadu, v objetí Vizovických vrchů, najdete místo, kde se zpomalí čas. Ráno si sednete k velkému oknu s kávou, přes den vyrazíte na výlet nebo jen zůstanete na terase a večer necháte saunu, aby z vás smyla poslední zbytky města.",
  },

  benefits: [
    {
      title: "Soukromí uprostřed sadu",
      text: "Žádné chodby, žádní sousedé za stěnou. Jen tiny house, sad, výhledy a prostor být chvíli offline.",
    },
    {
      title: "Sauna kousek od postele",
      text: "Vytopíte si ji na večer po výletě i na líné ráno. Nikam se kvůli ní nemusí jezdit.",
    },
    {
      title: "Komfort tiny housu",
      text: "Loftová ložnice, kuchyňka, koupelna, klimatizace, topení, Wi-Fi a terasa. Příroda ano. Nepohodlí ne.",
    },
    {
      title: "Blízko výletům",
      text: "Luhačovice, ZOO Lešná, Vizovice, Lukov, Všemina i stezky Vizovických vrchů máte na dosah.",
    },
  ],

  cabin: {
    eyebrow: "Domeček",
    headline: "Malý prostor, velký klid",
    text: "Glampidol je navržený tak, aby se v něm dobře dýchalo. Každý detail má svůj účel — spánek, výhled, vaření, odpočinek a návrat k jednoduchosti. Uvnitř najdete obývací část s rozkládací pohovkou, kuchyňský kout, koupelnu se sprchou a loftovou ložnici s matrací 160 × 200 cm.",
    features: [
      "Loftová ložnice 160 × 200 cm",
      "Rozkládací pohovka pro třetí osobu",
      "Koupelna se sprchou a WC",
      "Vybavená kuchyňka",
      "Lednice s mrazákem",
      "Plynový vařič",
      "Kávovar",
      "Rychlovarná konvice",
      "Klimatizace",
      "Plynové vytápění",
      "Wi-Fi",
      "Ručníky, župany a prostěradla do sauny",
    ],
  },

  sauna: {
    eyebrow: "Sauna",
    headline: "Finská sauna jen pro vás",
    text1:
      "Nejlepší večery v Glampidolu začínají jednoduše. Zhasne den, sad se ztiší a vy se přesunete do tepla finské sauny. Bez rezervování času. Bez dalších hostů. Bez příplatku.",
    text2:
      "Po výletě, po grilování, po dlouhém týdnu v práci. Sauna tady není doplněk. Je to rituál, který z obyčejného pobytu udělá malý reset těla i hlavy.",
  },

  terrace: {
    eyebrow: "Terasa · Gril · Ohniště",
    headline: "Večeře chutná líp, když ji osvítí zapadající slunce",
    text: "Terasa před domečkem je místo na ranní kávu, pomalou snídani i večerní grilování. Když se den začne lámat do zlaté, stačí připravit něco dobrého, posadit se ven a nechat sad dělat kulisu.",
    features: [
      "Krytá terasa s posezením",
      "Gril",
      "Ohniště",
      "Travnatá plocha kolem domečku",
    ],
  },

  audience: {
    eyebrow: "Pro koho",
    headline: "Komu bude v Glampidolu dobře",
    cards: [
      {
        title: "Pro páry",
        text: "Romantický pobyt ve dvou, sauna, terasa, večer u ohně a ráno bez budíku.",
      },
      {
        title: "Pro pár s dítětem",
        text: "Domeček je dělaný pro dva, na rozkládací pohovce ale přespí i třetí. Dítě má sad, dospělí klid a všichni společný zážitek mimo běžný režim.",
      },
      {
        title: "Pro unavenou hlavu",
        text: "Když potřebujete vypnout obrazovky, město a povinnosti. Přijet, nadechnout se a pár dní jen být.",
      },
      {
        title: "Pro aktivní víkend",
        text: "Vizovické vrchy, cykloturistika, výlety, ZOO Lešná, Luhačovice, zámky, hrady i koupání v okolí.",
      },
    ],
  },

  surroundings: {
    eyebrow: "Okolí",
    headline: "Na samotě, ale ne odříznutí od světa",
    text: "Glampidol stojí v trnkovém sadu v krajině Vizovických vrchů. Máte klid a soukromí, ale zároveň jste blízko míst, která zvládnou naplnit celý víkend — od procházky na vyhlídku nad vesnicí až po výlet do Luhačovic nebo do ZOO Lešná.",
    tripsTitle: "Tipy na výlety",
    tripsHint: "Kliknutím se otevře web daného místa.",
    openWeb: "Otevřít web",
  },

  trips: [
    {
      title: "ZOO a zámek Lešná",
      distance: "20 km",
      text: "Nejnavštěvovanější místo Zlínského kraje — 240 druhů zvířat v starém parku a zámek uprostřed.",
      alt: "Hlavní vstup do ZOO Zlín-Lešná",
    },
    {
      title: "Lázně Luhačovice",
      distance: "25 km",
      text: "Největší moravské lázně. Kolonáda, Jurkovičovy stavby, minerální prameny a den bez plánu.",
      alt: "Lázeňská kolonáda v Luhačovicích",
    },
    {
      title: "Koupaliště Zelené",
      distance: "10 km",
      text: "Zlínské letní koupaliště — plavecký bazén, tobogán, divoká řeka a stín pod stromy.",
      alt: "Koupaliště Zelené ve Zlíně",
    },
    {
      title: "Vyhlídka Lipské paseky",
      distance: "3 km pěšky",
      text: "Terasová vyhlídka nad Lípou. Půlkruhový rozhled na údolí Dřevnice a Hostýnské vrchy — dojdete z domečku.",
      alt: "Pohled na Lípu nad Dřevnicí a okolní kopce",
    },
  ],

  gallery: {
    eyebrow: "Galerie",
    headline: "Nahlédněte do Glampidolu",
    text: "Dřevo, světlo, velká okna, sauna, terasa a sad všude kolem. Podívejte se na místa, kde budete snídat, odpočívat, grilovat a večer zpomalovat.",
    cta: "Celá fotogalerie",
  },

  galleryPage: {
    eyebrow: "Fotogalerie",
    headline: "Celý Glampidol v obrazech",
    text: "Domeček v sadu, finská sauna, světlý interiér, terasa při západu slunce i výhledy do Vizovických vrchů. Projděte si všechna místa, než k nám vyrazíte.",
    back: "Zpět na hlavní stránku",
  },

  reviews: {
    eyebrow: "Reference",
    headline: "Jak se u nás vypíná",
    ratingSummary: "5,0 z 5 — 24 hodnocení hostů",
    ratingCta: "Všechny recenze na e-chalupy.cz",
    /** Prázdné v češtině — recenze jsou v originále. */
    translatedNote: "",
    items: [
      {
        text: "Pokud by to šlo, hodnotili bychom na 200 %! Vše bylo perfektní, nádherné místo, klid, samota, vše čisté a doladěné do posledního detailu. Majitelé milí a starostliví, skvělé možnosti na výlety. Večery u grilu na terase, neskutečně jsme si odpočinuli. Určitě se vrátíme, děkujeme!",
        author: "Pavla",
        when: "v páru · jaro 2025",
      },
      {
        text: "Absolutně geniální místo pro lidi, kteří chtějí vypnout a užít si pohodu. Vše skvěle vybavené, kuchyňka, venkovní gril, sociální zařízení. Jako bonus večerní sauna k nezaplacení. Paní je moc příjemná a opravdu se stará aby bylo všechno v pořádku, není co vytknout, tohle místo doporučíme úplně všem z našeho okolí. Děkujeme!",
        author: "Lukáš",
        when: "v páru · podzim 2025",
      },
      {
        text: "Naprosto boží ubytování, jak poloha, tak zázemí. Užili jsme si to ve dvou, ale bylo by to prima i s dětmi. Určitě se vrátíme. Krásný výhled, příjemné výlety do okolí, skvělá sauna.",
        author: "Iveta",
        when: "v páru · jaro 2026",
      },
      {
        text: "Úžasný domeček na klidném místě s parádním výhledem. Komunikace s majiteli velmi příjemná, v případě problému ihned vyřešeno. Domeček je útulný, do detailů vymazlený a nic zde nechybí. Děkujeme a doporučujeme.",
        author: "Veronika",
        when: "s rodinou · podzim 2025",
      },
      {
        text: "Krásné klidné prostředí, ráno sníh a srnky, večer hvězdná obloha. Objekt je moderní a funkční. Těšíme se na příště, až budou stromy v květu.",
        author: "Host",
        when: "v páru · zima 2024",
      },
      {
        text: "Velmi sympatičtí a ochotní majitelé, bezproblémová komunikace. Nádherné prostředí pro klidnou rodinnou dovolenou s možností výletů po okolí. Chatka vhodná max pro dva dospělé a dítě, do detailu promyšlená a nadstandardně vybavená. Dovolená předčila naše očekávání.",
        author: "Host",
        when: "s rodinou · léto 2025",
      },
      {
        text: "Ubytování bylo naprosto dokonalé. Cítili jsme se zde tak krásně, jako dlouho nikde jinde. Je tu velmi krásná atmosféra, majitelé strašně příjemní, vybavení parádní. Doporučujeme všema deseti a doufáme, že se sem zase vrátíme.",
        author: "Ježovi",
        when: "s rodinou · podzim 2025",
      },
      {
        text: "Moc ochotní majitelé, ubytování i okolí bylo důkladně uklizeno. Umístění chaty poskytuje maximální soukromí. Mohu doporučit všemi deseti.",
        author: "Kesoši",
        when: "v páru · léto 2025",
      },
    ],
  },

  pricing: {
    eyebrow: "Ceník",
    headline: "Ceník pobytu",
    text: "Cena zahrnuje ubytování v tiny housu a využití finské sauny. Minimální délka pobytu jsou 2 noci — přijet jen na jednu noc jde za zvláštní cenu.",
    cancellationTitle: "Storno podmínky",
    checkTitle: "Příjezd a odjezd",
    cta: "Ověřit volný termín",
    groups: [
      {
        title: "Cena za noc",
        note: "Platí pro pobyty od 2 nocí.",
        rows: [
          { label: "Neděle–čtvrtek", price: "3 200 Kč", unit: "/ noc" },
          { label: "Pátek–sobota", price: "3 500 Kč", unit: "/ noc" },
          { label: "Červenec–srpen", price: "3 500 Kč", unit: "/ noc" },
        ],
      },
      {
        title: "Celý víkend",
        note: "",
        rows: [{ label: "Pátek–neděle (2 noci)", price: "7 000 Kč", unit: "" }],
      },
      {
        title: "Pobyt na jednu noc",
        note: "Od neděle do čtvrtku běžně. Páteční nebo sobotní noc lze rezervovat nejdříve 24 hodin před příjezdem.",
        rows: [{ label: "Jedna noc", price: "5 000 Kč", unit: "" }],
      },
    ],
    notes: [
      "Cena zahrnuje ubytování v tiny housu a využití finské sauny.",
      "Ceny o svátcích a prázdninách se mohou lišit.",
    ],
    cancellation: [
      { when: "72 hodin před nástupem", refund: "vrací se celá částka" },
      { when: "24 hodin před nástupem", refund: "vrací se 50 % částky" },
      { when: "V den rezervace", refund: "bez finanční náhrady" },
    ],
    checkTimes: [
      { label: "Příjezd", value: "po 15:00" },
      { label: "Odjezd", value: "do 12:00" },
    ],
  },

  faq: {
    eyebrow: "Časté dotazy",
    headline: "Na co se ptáte nejčastěji",
    items: [
      {
        question: "Je sauna v ceně?",
        answer: "Ano. Využití finské sauny je zahrnuté v ceně pobytu.",
      },
      {
        question: "Pro kolik osob je Glampidol?",
        answer:
          "Glampidol je ubytování pro 2 osoby + 1. Loftová ložnice s matrací 160 × 200 cm patří dvěma, třetí host přespí na rozkládací pohovce v obývací části. Počítejte s tím, že pohovka nenabídne stejný komfort jako postel nahoře — jako plnohodnotné místo na spaní ji berte spíš u dítěte nebo na kratší pobyt.",
      },
      {
        question: "Dá se přijet jen na jednu noc?",
        answer:
          "Ano, cena za pobyt na jednu noc je 5 000 Kč. Od neděle do čtvrtku ji můžete rezervovat kdykoliv dopředu. Páteční nebo sobotní noc uvolňujeme až na poslední chvíli — rezervovat ji jde nejdříve 24 hodin před příjezdem, pokud termín do té doby nikdo nezabere na celý víkend.",
      },
      {
        question: "Můžeme vzít psa?",
        answer:
          "Domácí mazlíčky bohužel nemůžeme přijmout. Domeček je nekuřácký.",
      },
      {
        question: "Je Glampidol vhodný i v zimě?",
        answer:
          "Ano. Domeček má plynové vytápění a sauna dává zimnímu pobytu ještě lepší atmosféru.",
      },
      {
        question: "Kde zaparkujeme?",
        answer: "Parkování je přímo u tiny housu, pár kroků od dveří.",
      },
    ],
  },

  reservation: {
    eyebrow: "Rezervace",
    headline: "Vyberte si termín a přijeďte vypnout",
    text: "Volné termíny i rezervaci najdete na e-chalupy.cz. Je tam aktuální kalendář obsazenosti, takže hned uvidíte, kdy je Glampidol volný.",
    phone: "Telefon",
    email: "E-mail",
    location: "Lokalita",
    locationValue: "Lípa, Zlínský kraj",
    cardEyebrow: "Kalendář obsazenosti",
    cardTitle: "Rezervace vyřizujeme přes e-chalupy.cz",
    cardText:
      "Uvidíte volné termíny, ceny i hodnocení od hostů, kteří u nás už byli.",
    cardCta: "Rezervovat na e-chalupy",
    cardNote: "Radši osobně? Zavolejte nebo napište, domluvíme se napřímo.",
  },

  footer: {
    tagline:
      "Soukromý tiny house se saunou v trnkovém sadu u Vizovických vrchů. Místo, kde se vypíná město a zapíná ticho.",
    navTitle: "Navigace",
    contactTitle: "Kontakt",
    socialTitle: "Sledujte nás",
    copyright: "Glamping v trnkovém sadu.",
    credit: "Vyrobila agentura bnbmind.cz",
    photoCredits: "Fotografie výletních míst:",
  },

  /** Alt texty fotek — `src` zůstává v lib/images.ts */
  imageAlts: {
    cabinExterior: "Dřevěný domeček s finskou saunou uprostřed trnkového sadu",
    cabinForest: "Dřevěná fasáda domečku a terasa s posezením",
    interior: "Světlý interiér s velkými okny a výhledem do sadu",
    living: "Obývací část s pohovkou a výhledem do sadu",
    kitchen: "Vybavený kuchyňský kout s oknem do sadu",
    bathroom: "Koupelna se sprchovým koutem, umyvadlem a kulatým zrcadlem",
    sauna: "Interiér finské sauny s kamny a obloukovým oknem do krajiny",
    firepit: "Podvečer na terase u ohniště a grilu",
    grill: "Prostřená večeře na terase při západu slunce",
    orchard: "Zlaté světlo nad trnkovým sadem při západu slunce",
    hillsView: "Výhled z terasy do údolí a Vizovických vrchů",
    forest: "Rozhled z terasy do okolních kopců a údolí",
    tentView: "Terasa s posezením a výhledem do sadu při západu slunce",
  },

  /** Popisky fotek v galerii */
  imageLabels: {
    cabinExterior: "Domeček v sadu",
    cabinForest: "Atmosféra dřeva",
    interior: "Ráno u velkého okna",
    living: "Obývací část",
    kitchen: "Kuchyňka",
    bathroom: "Koupelna",
    sauna: "Finská sauna",
    firepit: "Večer u ohniště",
    grill: "Večeře na terase",
    orchard: "Zlaté světlo nad sadem",
    hillsView: "Výhled do kopců",
    forest: "Rozhled do kopců",
    tentView: "Terasa při západu slunce",
  },
};
