import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import type { Dictionary } from "@/lib/i18n";

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
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review} delay={index * 0.12}>
              <blockquote className="flex h-full flex-col rounded-sm border border-sand bg-linen/60 p-8">
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-amber"
                >
                  &ldquo;
                </span>
                <p className="mt-4 flex-1 text-[1.02rem] leading-[1.85] font-light text-ink/80 italic">
                  {review}
                </p>
                <footer className="mt-6 border-t border-sand pt-4 font-display text-[0.7rem] font-medium tracking-[0.18em] text-ink/50 uppercase">
                  {dict.reviews.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs font-light text-ink/40">
            {dict.reviews.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
