import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { CABIN_FEATURES } from "@/lib/content";
import { IMAGES } from "@/lib/images";

export default function CabinSection() {
  return (
    <section id="domecek" className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-36">
        {/* Foto koláž */}
        <Reveal className="relative">
          <div className="relative aspect-[3/4] w-4/5 overflow-hidden rounded-sm">
            <Image
              src={IMAGES.interior.src}
              alt={IMAGES.interior.alt}
              fill
              sizes="(min-width: 1024px) 480px, 80vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
            />
          </div>
          <div className="absolute right-0 -bottom-10 aspect-[4/3] w-1/2 overflow-hidden rounded-sm border-4 border-cream shadow-xl shadow-bark/10">
            <Image
              src={IMAGES.living.src}
              alt={IMAGES.living.alt}
              fill
              sizes="(min-width: 1024px) 300px, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        {/* Text + vybavení */}
        <Reveal delay={0.15} className="mt-10 lg:mt-0">
          <Eyebrow>Domeček</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            Malý prostor, velký klid
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.85] font-light text-ink/75">
            Glampidol je navržený tak, aby se v něm dobře dýchalo. Každý detail
            má svůj účel — spánek, výhled, vaření, odpočinek a návrat
            k jednoduchosti. Uvnitř najdete obývací část s rozkládací pohovkou,
            kuchyňský kout, koupelnu se sprchou a loftovou ložnici s matrací
            160 × 200 cm.
          </p>

          <ul className="mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {CABIN_FEATURES.map((feature) => (
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
      </div>
    </section>
  );
}
