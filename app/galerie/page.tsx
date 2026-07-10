import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Fotogalerie | Glampidol",
  description:
    "Kompletní fotogalerie Glampidolu — domeček, finská sauna, interiér, terasa a trnkový sad u Vizovických vrchů.",
};

/** Celá fotogalerie — všechny fotky Glampidolu. */
const PHOTOS = [
  { image: IMAGES.cabinExterior, label: "Domeček v sadu" },
  { image: IMAGES.orchard, label: "Zlaté světlo nad sadem" },
  { image: IMAGES.hillsView, label: "Výhled do kopců" },
  { image: IMAGES.firepit, label: "Večer u ohniště" },
  { image: IMAGES.grill, label: "Večeře na terase" },
  { image: IMAGES.tentView, label: "Terasa při západu slunce" },
  { image: IMAGES.sauna, label: "Finská sauna" },
  { image: IMAGES.interior, label: "Ráno u velkého okna" },
  { image: IMAGES.living, label: "Obývací část" },
  { image: IMAGES.kitchen, label: "Kuchyňka" },
  { image: IMAGES.bathroom, label: "Koupelna" },
  { image: IMAGES.cabinForest, label: "Atmosféra dřeva" },
  { image: IMAGES.forest, label: "Rozhled do kopců" },
];

export default function GaleriePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Tmavý úvodní pruh — kvůli čitelnosti průhledné hlavičky */}
        <section className="bg-bark">
          <div className="mx-auto w-full max-w-[1280px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
            <Reveal>
              <Eyebrow light>Fotogalerie</Eyebrow>
              <h1 className="mt-6 font-display text-4xl leading-[1.12] font-semibold tracking-tight text-cream sm:text-5xl">
                Celý Glampidol v obrazech
              </h1>
              <p className="mt-6 max-w-xl text-base leading-[1.85] font-light text-cream/70">
                Domeček v sadu, finská sauna, světlý interiér, terasa při západu
                slunce i výhledy do Vizovických vrchů. Projděte si všechna místa,
                než k nám vyrazíte.
              </p>
              <a
                href="/"
                className="mt-8 inline-flex items-center gap-2 font-display text-[0.8rem] font-semibold tracking-[0.14em] text-cream/80 uppercase transition-colors duration-300 hover:text-amber-soft"
              >
                <span aria-hidden>←</span> Zpět na hlavní stránku
              </a>
            </Reveal>
          </div>
        </section>

        {/* Mřížka všech fotek */}
        <section className="bg-cream">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {PHOTOS.map((item, index) => (
                <Reveal key={item.image.src} delay={(index % 3) * 0.08}>
                  <figure className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 1024px) 420px, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <figcaption className="absolute bottom-3 left-4 translate-y-2 font-display text-[0.78rem] font-medium tracking-[0.12em] text-cream uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.label}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
