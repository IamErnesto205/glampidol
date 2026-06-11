import { IMAGES, type SiteImage } from "./images";

/** Benefity / USP */
export const BENEFITS = [
  {
    title: "Soukromí uprostřed sadu",
    text: "Žádné chodby, žádní sousedé za stěnou. Jen tiny house, sad, výhledy a prostor být chvíli offline.",
  },
  {
    title: "Sauna v ceně pobytu",
    text: "Finská sauna není doplněk za příplatek. Je součástí pobytu a večerního rituálu.",
  },
  {
    title: "Komfort tiny housu",
    text: "Loftová ložnice, kuchyňka, koupelna, klimatizace, topení, Wi-Fi a terasa. Příroda ano. Nepohodlí ne.",
  },
  {
    title: "Blízko výletům",
    text: "Luhačovice, ZOO Lešná, Vizovice, Lukov, Všemina i stezky Vizovických vrchů máte na dosah.",
  },
] as const;

/** Vybavení domečku */
export const CABIN_FEATURES = [
  "Loftová ložnice 160 × 200 cm",
  "Rozkládací pohovka",
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
] as const;

/** Terasa / gril / ohniště */
export const TERRACE_FEATURES = [
  "Terasa s posezením",
  "Zahradní nábytek",
  "Gril",
  "Ohniště",
  "Travnatá plocha kolem domečku",
] as const;

/** Pro koho je Glampidol */
export const AUDIENCE = [
  {
    title: "Pro páry",
    text: "Romantický pobyt ve dvou, sauna, terasa, večer u ohně a ráno bez budíku.",
  },
  {
    title: "Pro malou rodinu",
    text: "Tiny house zvládne až 4 osoby. Děti mají sad, dospělí klid a všichni společný zážitek mimo běžný režim.",
  },
  {
    title: "Pro unavenou hlavu",
    text: "Když potřebujete vypnout obrazovky, město a povinnosti. Přijet, nadechnout se a pár dní jen být.",
  },
  {
    title: "Pro aktivní víkend",
    text: "Vizovické vrchy, cykloturistika, výlety, ZOO Lešná, Luhačovice, zámky, hrady i koupání v okolí.",
  },
] as const;

/** Tipy na výlety v okolí */
export const TRIPS = [
  "Luhačovice",
  "ZOO Lešná",
  "Vizovický zámek",
  "Janův hrad",
  "Hrad Lukov",
  "Vyhlídka Lipské paseky",
  "Koupání Všemina",
  "Vodní svět Velké Karlovice",
  "Wellness Kapka resort",
  "Cyklotrasy a stezky Vizovických vrchů",
] as const;

/** Galerie — pořadí = pořadí v gridu */
export const GALLERY: { image: SiteImage; label: string; wide?: boolean }[] = [
  { image: IMAGES.cabinExterior, label: "Domeček v sadu", wide: true },
  { image: IMAGES.sauna, label: "Finská sauna" },
  { image: IMAGES.interior, label: "Ráno u velkého okna" },
  { image: IMAGES.living, label: "Obývací část" },
  { image: IMAGES.kitchen, label: "Kuchyňka" },
  { image: IMAGES.bathroom, label: "Koupelna" },
  { image: IMAGES.hillsView, label: "Výhled do kopců", wide: true },
  { image: IMAGES.firepit, label: "Večer u ohniště" },
  { image: IMAGES.cabinForest, label: "Atmosféra dřeva" },
];

/** Recenze — ukázkové texty, nahradit reálnými referencemi hostů */
export const REVIEWS = [
  "Krásné místo, absolutní klid a sauna jako třešnička. Přesně víkend, který jsme potřebovali.",
  "Všechno čisté, nové a promyšlené. Nejvíc jsme si užili výhledy a večerní saunu.",
  "Ideální reset od práce. Ráno káva na terase, večer oheň a ticho všude kolem.",
] as const;

/** Ceník */
export const PRICING = [
  { label: "Neděle–čtvrtek", price: "3 200 Kč", unit: "/ noc" },
  { label: "Pátek–sobota", price: "3 500 Kč", unit: "/ noc" },
  { label: "Víkend pátek–neděle", price: "7 000 Kč", unit: "" },
  { label: "Jedna noc neděle–čtvrtek", price: "5 000 Kč", unit: "" },
  { label: "Červenec–srpen", price: "3 500 Kč", unit: "/ noc" },
] as const;

export const PRICING_NOTES = [
  "Cena zahrnuje ubytování v tiny housu a využití finské sauny.",
  "Minimální délka pobytu jsou 2 noci.",
  "Pobyt na jednu noc je možný od neděle do čtvrtku.",
  "Ceny o svátcích a prázdninách se mohou lišit.",
] as const;

export const CANCELLATION = [
  { when: "72 hodin před nástupem", refund: "vrací se celá částka" },
  { when: "24 hodin před nástupem", refund: "vrací se 50 % částky" },
  { when: "V den rezervace", refund: "bez finanční náhrady" },
] as const;

export const CHECK_TIMES = [
  { label: "Příjezd", value: "po 15:00" },
  { label: "Odjezd", value: "do 12:00" },
] as const;

/** FAQ */
export const FAQ_ITEMS = [
  {
    question: "Je sauna v ceně?",
    answer: "Ano. Využití finské sauny je zahrnuté v ceně pobytu.",
  },
  {
    question: "Pro kolik osob je Glampidol?",
    answer:
      "Glampidol nabízí ubytování až pro 4 osoby. Nejkomfortnější je pro pár, ale díky rozkládací pohovce zvládne i menší rodinu.",
  },
  {
    question: "Dá se přijet jen na jednu noc?",
    answer:
      "Ano, pobyt na jednu noc je možný od neděle do čtvrtku. Cena za jednu noc je 5 000 Kč.",
  },
  {
    question: "Kdy je příjezd a odjezd?",
    answer: "Příjezd je možný po 15:00. Odjezd je do 12:00.",
  },
  {
    question: "Jsou povoleni domácí mazlíčci?",
    answer: "Ne, domácí mazlíčci nejsou povoleni.",
  },
  {
    question: "Je v domečku Wi-Fi?",
    answer: "Ano, k dispozici je Wi-Fi připojení.",
  },
  {
    question: "Dá se u domečku parkovat?",
    answer: "Ano, parkování je přímo u tiny housu.",
  },
  {
    question: "Je pobyt vhodný i v zimě?",
    answer:
      "Ano. Domeček má plynové vytápění a sauna dává zimnímu pobytu ještě lepší atmosféru.",
  },
  {
    question: "Je tam klimatizace?",
    answer: "Ano, v horkých dnech lze prostor ochladit klimatizací.",
  },
] as const;
