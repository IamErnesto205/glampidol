import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import SeasonBackdrop from "./SeasonBackdrop";
import type { Dictionary } from "@/lib/i18n";

export default function AudienceSection({ dict }: { dict: Dictionary }) {
  const AUDIENCE = dict.audience.cards;

  return (
    <section className="relative overflow-hidden bg-linen">
      <SeasonBackdrop season="leto" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>{dict.audience.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl">
            {dict.audience.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.1}>
              <div className="group h-full rounded-sm border border-sand bg-cream p-7 transition-colors duration-300 hover:border-olive/40">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {card.title}
                </h3>
                <span
                  aria-hidden
                  className="mt-4 block h-px w-9 bg-amber transition-[width] duration-300 group-hover:w-14"
                />
                <p className="mt-4 text-[0.95rem] leading-[1.8] font-light text-ink/70">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
