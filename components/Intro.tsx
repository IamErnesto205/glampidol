import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { IMAGES } from "@/lib/images";
import type { Dictionary } from "@/lib/i18n";

export default function Intro({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-36">
        <Reveal className="lg:col-span-7">
          <Eyebrow>{dict.intro.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            {dict.intro.headline}{" "}
            <span className="text-olive">{dict.intro.headlineAccent}</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-[1.85] font-light text-ink/75 sm:text-lg">
            {dict.intro.text}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={IMAGES.orchard}
              alt={dict.imageAlts.orchard}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
            />
          </div>
          {/* Dekorativní rámeček posunutý za fotku */}
          <div
            aria-hidden
            className="absolute -right-4 -bottom-4 -z-10 hidden h-full w-full rounded-sm border border-olive/30 lg:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
