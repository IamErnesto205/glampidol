import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { GALLERY } from "@/lib/content";

export default function GallerySection() {
  return (
    <section id="galerie" className="bg-linen">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
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

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((item, index) => (
            <Reveal
              key={item.image.src}
              delay={(index % 4) * 0.08}
              className={item.wide ? "col-span-2" : ""}
            >
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes={
                    item.wide
                      ? "(min-width: 1024px) 640px, 100vw"
                      : "(min-width: 1024px) 320px, 50vw"
                  }
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
  );
}
