import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { TERRACE_FEATURES } from "@/lib/content";
import { IMAGES } from "@/lib/images";

export default function TerraceSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-36">
        {/* Text vlevo */}
        <Reveal className="order-2 lg:order-1">
          <Eyebrow>Terasa · Gril · Ohniště</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            Večeře chutná líp, když ji osvítí zapadající slunce
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.85] font-light text-ink/75">
            Terasa před domečkem je místo na ranní kávu, pomalou snídani
            i večerní grilování. Když se den začne lámat do zlaté, stačí
            připravit něco dobrého, posadit se ven a nechat sad dělat kulisu.
          </p>

          <ul className="mt-9 space-y-3">
            {TERRACE_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-[0.95rem] font-light text-ink/80"
              >
                <span
                  aria-hidden
                  className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber"
                />
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Foto koláž vpravo */}
        <Reveal delay={0.15} className="relative order-1 lg:order-2">
          <div className="relative ml-auto aspect-[3/4] w-4/5 overflow-hidden rounded-sm">
            <Image
              src={IMAGES.firepit.src}
              alt={IMAGES.firepit.alt}
              fill
              sizes="(min-width: 1024px) 480px, 80vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
            />
          </div>
          <div className="absolute -bottom-10 left-0 aspect-[4/3] w-1/2 overflow-hidden rounded-sm border-4 border-cream shadow-xl shadow-bark/10">
            <Image
              src={IMAGES.grill.src}
              alt={IMAGES.grill.alt}
              fill
              sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
