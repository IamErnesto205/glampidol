import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { BOOKING_URL, CONTACT } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

/**
 * Rezervace se nevyřizují přes web — sekce odkazuje na inzerát
 * na e-chalupy.cz, kde je kalendář obsazenosti i poptávkový formulář.
 */
export default function ReservationSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="rezervace" className="bg-bark">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-8 lg:py-32">
        {/* Text + kontakt */}
        <Reveal className="lg:col-span-6">
          <Eyebrow light>{dict.reservation.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-cream sm:text-4xl lg:text-[2.6rem]">
            {dict.reservation.headline}
          </h2>
          <p className="mt-6 max-w-md text-base leading-[1.85] font-light text-cream/80">
            {dict.reservation.text}
          </p>

          <dl id="kontakt" className="mt-12 space-y-5">
            {[
              {
                label: dict.reservation.phone,
                value: CONTACT.phone,
                href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
              },
              {
                label: dict.reservation.email,
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
              },
              {
                label: dict.reservation.location,
                value: dict.reservation.locationValue,
              },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-cream/50 uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 text-lg font-light text-cream">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors duration-300 hover:text-amber-soft"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Odkaz na rezervaci */}
        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="rounded-sm border border-cream/15 bg-cream/5 px-8 py-12 text-center sm:px-12 lg:py-16">
            <p className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-amber-soft uppercase">
              {dict.reservation.cardEyebrow}
            </p>
            <p className="mt-6 text-xl leading-[1.6] font-light text-cream sm:text-2xl">
              {dict.reservation.cardTitle}
            </p>
            <p className="mt-4 text-[0.95rem] leading-[1.8] font-light text-cream/65">
              {dict.reservation.cardText}
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-olive px-8 py-4 font-display text-sm font-semibold tracking-[0.1em] text-cream uppercase shadow-lg shadow-bark/40 transition-colors duration-300 hover:bg-olive-deep"
            >
              {dict.reservation.cardCta}
              <span aria-hidden>→</span>
            </a>

            <p className="mt-8 text-[0.85rem] leading-relaxed font-light text-cream/50">
              {dict.reservation.cardNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
