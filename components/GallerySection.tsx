import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import SeasonBackdrop from "./SeasonBackdrop";
import { IMAGES } from "@/lib/images";

/** Ukázka do galerie — jeden velký záběr + čtyři dlaždice. */
const FEATURED = { image: IMAGES.cabinExterior, label: "Domeček v sadu" };
const TILES = [
  { image: IMAGES.sauna, label: "Finská sauna" },
  { image: IMAGES.interior, label: "Ráno u velkého okna" },
  { image: IMAGES.hillsView, label: "Výhled do kopců" },
  { image: IMAGES.firepit, label: "Večer u ohniště" },
];

export default function GallerySection() {
  return (
    <section id="galerie" className="relative overflow-hidden bg-linen">
      <SeasonBackdrop season="podzim" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pt-24 pb-12 lg:px-8 lg:pt-32 lg:pb-14">
        <Reveal className="max-w-2xl">
          <Eyebrow>Galerie</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl">
            Nahlédněte do Glampidolu
          </h2>
          <p className="mt-6 text-base leading-[1.85] font-light text-ink/75">
            Dřevo, světlo, velká okna, sauna, terasa a sad všude kolem.
            Podívejte se na místa, kde budete snídat, odpočívat, grilovat
            a večer zpomalovat.
          </p>
        </Reveal>

        {/* Vyrovnaná mřížka pevné výšky: velký záběr + 2×2 dlaždice */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:h-[560px] lg:grid-cols-4 lg:grid-rows-2">
          <Reveal className="col-span-2 max-lg:aspect-[4/3] lg:row-span-2">
            <figure className="group relative h-full w-full overflow-hidden rounded-sm">
              <Image
                src={FEATURED.image.src}
                alt={FEATURED.image.alt}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-4 translate-y-2 font-display text-[0.78rem] font-medium tracking-[0.12em] text-cream uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {FEATURED.label}
              </figcaption>
            </figure>
          </Reveal>

          {TILES.map((item, index) => (
            <Reveal
              key={item.image.src}
              delay={(index % 2) * 0.08}
              className="max-lg:aspect-[4/3]"
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 50vw"
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

        {/* Tlačítko na celou fotogalerii */}
        <Reveal className="mt-12 flex justify-center">
          <a
            href="/galerie"
            className="group inline-flex items-center gap-2.5 rounded-full bg-olive px-8 py-3.5 font-display text-[0.8rem] font-semibold tracking-[0.14em] text-cream uppercase transition-colors duration-300 hover:bg-olive-deep"
          >
            Celá fotogalerie
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
