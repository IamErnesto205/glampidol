import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import SeasonBackdrop from "./SeasonBackdrop";
import { RESERVATION_HREF } from "@/lib/site";
import {
  CANCELLATION,
  CHECK_TIMES,
  PRICING,
  PRICING_NOTES,
} from "@/lib/content";

export default function PricingSection() {
  return (
    <section id="cenik" className="relative overflow-hidden bg-linen">
      <SeasonBackdrop season="zima" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>Ceník</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl">
            Ceník pobytu
          </h2>
          <p className="mt-6 text-base leading-[1.85] font-light text-ink/75">
            Cena zahrnuje ubytování v tiny housu a využití finské sauny.
            Minimální délka pobytu jsou 2 noci. Pobyt na jednu noc je možný od
            neděle do čtvrtku.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Cenová tabulka */}
          <Reveal className="lg:col-span-7">
            <dl className="divide-y divide-sand rounded-sm border border-sand bg-cream">
              {PRICING.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-7 py-5"
                >
                  <dt className="text-[0.95rem] font-light text-ink/80">
                    {row.label}
                  </dt>
                  <dd className="font-display text-lg font-semibold tracking-tight text-olive">
                    {row.price}
                    {row.unit && (
                      <span className="ml-1 text-[0.8rem] font-normal text-ink/50">
                        {row.unit}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 space-y-1.5">
              {PRICING_NOTES.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-2.5 text-[0.85rem] font-light text-ink/60"
                >
                  <span
                    aria-hidden
                    className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-amber"
                  />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Storno + příjezd/odjezd */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <h3 className="font-display text-[0.8rem] font-semibold tracking-[0.18em] text-ink/60 uppercase">
              Storno podmínky
            </h3>
            <ul className="mt-5 space-y-4">
              {CANCELLATION.map((item) => (
                <li
                  key={item.when}
                  className="border-l-2 border-olive/40 pl-4"
                >
                  <p className="font-display text-[0.95rem] font-semibold text-ink">
                    {item.when}
                  </p>
                  <p className="mt-0.5 text-[0.9rem] font-light text-ink/65">
                    {item.refund}
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-[0.8rem] font-semibold tracking-[0.18em] text-ink/60 uppercase">
              Příjezd a odjezd
            </h3>
            <dl className="mt-5 space-y-3">
              {CHECK_TIMES.map((time) => (
                <div key={time.label} className="flex items-baseline gap-4">
                  <dt className="w-20 text-[0.9rem] font-light text-ink/65">
                    {time.label}
                  </dt>
                  <dd className="font-display text-base font-semibold text-ink">
                    {time.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={RESERVATION_HREF}
              className="mt-12 inline-flex items-center gap-2.5 rounded-full bg-olive px-8 py-4 font-display text-sm font-semibold tracking-[0.1em] text-cream uppercase transition-colors duration-300 hover:bg-olive-deep"
            >
              Ověřit volný termín
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
