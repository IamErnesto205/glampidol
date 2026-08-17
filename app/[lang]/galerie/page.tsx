import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { getDictionary, hasLocale, localePath, LOCALES } from "@/lib/i18n";
import { IMAGES, type ImageKey } from "@/lib/images";
import { OG_IMAGE } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/galerie">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return {
    title: dict.meta.galleryTitle,
    description: dict.meta.galleryDescription,
    alternates: {
      canonical: `/${lang}/galerie`,
      languages: Object.fromEntries(
        LOCALES.map((locale) => [locale, `/${locale}/galerie`]),
      ),
    },
    // Bez vlastního openGraph by sdílení galerie ukazovalo titulek úvodní stránky.
    openGraph: {
      title: dict.meta.galleryTitle,
      description: dict.meta.galleryDescription,
      type: "website",
      url: `/${lang}/galerie`,
      images: [{ ...OG_IMAGE, alt: dict.meta.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.galleryTitle,
      description: dict.meta.galleryDescription,
      images: [OG_IMAGE.url],
    },
  };
}

/** Celá fotogalerie — pořadí fotek, popisky se berou ze slovníku. */
const PHOTO_KEYS: ImageKey[] = [
  "cabinExterior",
  "orchard",
  "hillsView",
  "firepit",
  "grill",
  "tentView",
  "sauna",
  "interior",
  "living",
  "kitchen",
  "bathroom",
  "cabinForest",
  "forest",
];

export default async function GaleriePage({
  params,
}: PageProps<"/[lang]/galerie">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Header dict={dict} locale={lang} />
      <main className="flex-1">
        {/* Tmavý úvodní pruh — kvůli čitelnosti průhledné hlavičky */}
        <section className="bg-bark">
          <div className="mx-auto w-full max-w-[1280px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
            <Reveal>
              <Eyebrow light>{dict.galleryPage.eyebrow}</Eyebrow>
              <h1 className="mt-6 font-display text-4xl leading-[1.12] font-semibold tracking-tight text-cream sm:text-5xl">
                {dict.galleryPage.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-[1.85] font-light text-cream/70">
                {dict.galleryPage.text}
              </p>
              <a
                href={localePath(lang)}
                className="mt-8 inline-flex items-center gap-2 font-display text-[0.8rem] font-semibold tracking-[0.14em] text-cream/80 uppercase transition-colors duration-300 hover:text-amber-soft"
              >
                <span aria-hidden>←</span> {dict.galleryPage.back}
              </a>
            </Reveal>
          </div>
        </section>

        {/* Mřížka všech fotek */}
        <section className="bg-cream">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {PHOTO_KEYS.map((key, index) => (
                <Reveal key={key} delay={(index % 3) * 0.08}>
                  <figure className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={IMAGES[key]}
                      alt={dict.imageAlts[key]}
                      fill
                      sizes="(min-width: 1024px) 420px, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <figcaption className="absolute bottom-3 left-4 translate-y-2 font-display text-[0.78rem] font-medium tracking-[0.12em] text-cream uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {dict.imageLabels[key]}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={lang} />
    </>
  );
}
