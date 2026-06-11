import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { TRIPS } from "@/lib/content";
import { IMAGES } from "@/lib/images";

export default function SurroundingsSection() {
  return (
    <section id="okoli" className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-36">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={IMAGES.hillsView.src}
              alt={IMAGES.hillsView.alt}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 -z-10 hidden h-full w-full rounded-sm border border-olive/30 lg:block"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <Eyebrow>Okolí</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            Na samotě, ale ne odříznutí od světa
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.85] font-light text-ink/75">
            Glampidol stojí v trnkovém sadu v krajině Vizovických vrchů. Máte
            klid a soukromí, ale zároveň jste blízko míst, která zvládnou
            naplnit celý víkend — od procházek po okolí až po výlety do
            Luhačovic, ZOO Lešná nebo na hrady a zámky v okolí.
          </p>

          <h3 className="mt-10 font-display text-[0.8rem] font-semibold tracking-[0.18em] text-ink/60 uppercase">
            Tipy na výlety
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {TRIPS.map((trip) => (
              <li
                key={trip}
                className="rounded-full border border-olive/30 bg-linen px-4 py-2 text-[0.85rem] font-light text-ink/80 transition-colors duration-300 hover:border-olive/60 hover:bg-sand/60"
              >
                {trip}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
