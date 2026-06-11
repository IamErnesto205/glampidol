import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { IMAGES } from "@/lib/images";

export default function SaunaSection() {
  return (
    <section id="sauna" className="relative bg-bark">
      <div className="mx-auto grid w-full max-w-[1280px] items-stretch gap-0 lg:grid-cols-2">
        {/* Fotka sauny — full-bleed polovina */}
        <Reveal className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-0">
          <div className="absolute inset-0 overflow-hidden lg:inset-y-0">
            <Image
              src={IMAGES.sauna.src}
              alt={IMAGES.sauna.alt}
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
            <Eyebrow light>Sauna</Eyebrow>
            <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-cream sm:text-4xl lg:text-[2.6rem]">
              Finská sauna jen pro vás
            </h2>
            <p className="mt-6 max-w-lg text-base leading-[1.85] font-light text-cream/80">
              Nejlepší večery v Glampidolu začínají jednoduše. Zhasne den, sad
              se ztiší a vy se přesunete do tepla finské sauny. Bez rezervování
              času. Bez dalších hostů. Bez příplatku.
            </p>

            {/* Highlight */}
            <p className="mt-9 inline-flex items-center gap-3 rounded-sm border-l-2 border-amber-soft bg-cream/5 px-5 py-4 font-display text-sm font-semibold tracking-[0.08em] text-amber-soft uppercase">
              Sauna je zahrnutá v ceně pobytu
            </p>

            <p className="mt-9 max-w-lg text-base leading-[1.85] font-light text-cream/80">
              Po výletě, po grilování, po dlouhém týdnu v práci. Sauna tady
              není doplněk. Je to rituál, který z obyčejného pobytu udělá malý
              reset těla i hlavy.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
