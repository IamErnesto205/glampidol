import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { REVIEWS_URL } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

/** Hvězdičky k celkovému hodnocení — dekorace, číslo je vedle v textu. */
function Stars() {
  return (
    <span aria-hidden className="text-base leading-none text-amber">
      {"★".repeat(5)}
    </span>
  );
}

export default function ReviewsSection({ dict }: { dict: Dictionary }) {
  const REVIEWS = dict.reviews.items;

  return (
    <section className="bg-cream">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>{dict.reviews.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl">
            {dict.reviews.headline}
          </h2>

          {/* Souhrnné hodnocení + odkaz na zdroj */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2.5">
              <Stars />
              <span className="font-display text-[0.95rem] font-semibold tracking-tight text-ink">
                {dict.reviews.ratingSummary}
              </span>
            </span>
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[0.9rem] font-light text-olive underline decoration-olive/30 underline-offset-4 transition-colors duration-300 hover:text-olive-deep hover:decoration-olive/70"
            >
              {dict.reviews.ratingCta}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>

        {/* Zděná mřížka — recenze mají různou délku, tak ať nevznikají díry */}
        <div className="mt-14 gap-6 sm:columns-2 lg:columns-3">
          {REVIEWS.map((review, index) => (
            <Reveal
              key={review.text}
              delay={(index % 3) * 0.1}
              className="mb-6 break-inside-avoid"
            >
              <blockquote className="rounded-sm border border-sand bg-linen/60 p-7">
                <span
                  aria-hidden
                  className="font-display text-4xl leading-none text-amber"
                >
                  &ldquo;
                </span>
                <p className="mt-3 text-[0.98rem] leading-[1.8] font-light text-ink/80 italic">
                  {review.text}
                </p>
                <footer className="mt-5 border-t border-sand pt-4">
                  <p className="font-display text-[0.8rem] font-semibold tracking-[0.08em] text-ink">
                    {review.author}
                  </p>
                  <p className="mt-0.5 text-[0.78rem] font-light text-ink/50">
                    {review.when}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        {dict.reviews.translatedNote && (
          <Reveal delay={0.2}>
            <p className="mt-6 text-xs font-light text-ink/40">
              {dict.reviews.translatedNote}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
