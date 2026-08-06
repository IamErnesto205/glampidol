import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { TRIP_META } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";

export default function SurroundingsSection({ dict }: { dict: Dictionary }) {
  // Popisky ze slovníku spojené s odkazem a fotkou podle pořadí
  const TRIPS = dict.trips.map((trip, i) => ({ ...trip, ...TRIP_META[i] }));

  return (
    <section id="okoli" className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1280px] items-start gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-36">
        {/* Text — drží se nahoře vedle karet */}
        <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
          <Eyebrow>{dict.surroundings.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            {dict.surroundings.headline}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.85] font-light text-ink/75">
            {dict.surroundings.text}
          </p>

          <h3 className="mt-10 font-display text-[0.8rem] font-semibold tracking-[0.18em] text-ink/60 uppercase">
            {dict.surroundings.tripsTitle}
          </h3>
          <p className="mt-3 max-w-xs text-[0.9rem] leading-[1.7] font-light text-ink/55">
            {dict.surroundings.tripsHint}
          </p>
        </Reveal>

        {/* Kartičky — vždy 2 vedle sebe */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          {TRIPS.map((trip, i) => (
            <li key={trip.title} className="h-full">
              <Reveal delay={i * 0.08} className="h-full">
                <a
                  href={trip.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-sand bg-linen/50 transition-colors duration-300 hover:border-olive/50 hover:bg-linen"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={trip.src}
                      alt={trip.alt}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-bark/75 px-3 py-1 font-display text-[0.7rem] font-medium tracking-[0.1em] text-cream uppercase backdrop-blur-sm">
                      {trip.distance}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="font-display text-lg leading-snug font-semibold tracking-tight text-ink">
                      {trip.title}
                    </h4>
                    <p className="mt-2.5 flex-1 text-[0.9rem] leading-[1.7] font-light text-ink/70">
                      {trip.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[0.75rem] font-semibold tracking-[0.12em] text-olive uppercase transition-colors duration-300 group-hover:text-olive-deep">
                      {dict.surroundings.openWeb}
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
