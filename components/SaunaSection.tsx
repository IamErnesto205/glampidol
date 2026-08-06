import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { IMAGES } from "@/lib/images";
import type { Dictionary } from "@/lib/i18n";

export default function SaunaSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="sauna" className="relative bg-bark">
      <div className="mx-auto grid w-full max-w-[1280px] items-stretch gap-0 lg:grid-cols-2">
        {/* Fotka sauny — full-bleed polovina */}
        <Reveal className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-0">
          <div className="absolute inset-0 overflow-hidden lg:inset-y-0">
            <Image
              src={IMAGES.sauna}
              alt={dict.imageAlts.sauna}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bark/40 to-transparent lg:bg-gradient-to-r" />
          </div>
        </Reveal>

        {/* Text */}
        <div className="px-6 py-20 lg:px-16 lg:py-32">
          <Reveal>
            <Eyebrow light>{dict.sauna.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-cream sm:text-4xl lg:text-[2.6rem]">
              {dict.sauna.headline}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-[1.85] font-light text-cream/80">
              {dict.sauna.text1}
            </p>

            <p className="mt-6 max-w-lg text-base leading-[1.85] font-light text-cream/80">
              {dict.sauna.text2}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
