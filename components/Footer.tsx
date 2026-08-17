import Image from "next/image";
import { TRIP_META } from "@/lib/content";
import { CONTACT, NAV_ITEMS, SITE_NAME, SOCIALS } from "@/lib/site";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";

/**
 * Uvedení autorů fotek u tipů na výlety — podmínka licence Wikimedia
 * Commons. Až fotky nahradíte vlastními, smažte u nich `credit`
 * v lib/content.ts a řádek z patičky sám zmizí.
 */
const PHOTO_CREDITS = TRIP_META.flatMap((trip) =>
  trip.credit ? [trip.credit] : [],
);
// Stejná fotka jako v Hero
import heroImage from "@/public/images/hero.png";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const home = localePath(locale);

  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-bark">
      {/* Fotka na pozadí (stejná jako v Hero) + tmavý překryv pro čitelnost */}
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bark/85" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">
        {/* Logo + popis */}
        <div>
          <p className="font-display text-xl font-semibold tracking-[0.22em] text-cream uppercase">
            {SITE_NAME}
          </p>
          <p className="mt-5 max-w-xs text-[0.9rem] leading-[1.8] font-light text-cream/60">
            {dict.footer.tagline}
          </p>
        </div>

        {/* Navigace */}
        <nav aria-label={dict.footer.navTitle}>
          <h3 className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-cream/45 uppercase">
            {dict.footer.navTitle}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.hash}>
                <a
                  href={`${home}${item.hash}`}
                  className="text-[0.9rem] font-light text-cream/70 transition-colors duration-300 hover:text-amber-soft"
                >
                  {dict.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kontakt */}
        <div>
          <h3 className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-cream/45 uppercase">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-5 space-y-2.5 text-[0.9rem] font-light text-cream/70">
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="transition-colors duration-300 hover:text-amber-soft"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors duration-300 hover:text-amber-soft"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>{dict.reservation.locationValue}</li>
          </ul>
        </div>

        {/* Sociální sítě */}
        <div>
          <h3 className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-cream/45 uppercase">
            {dict.footer.socialTitle}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.9rem] font-light text-cream/70 transition-colors duration-300 hover:text-amber-soft"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spodní lišta */}
      <div className="relative z-10 border-t border-cream/10">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-6 lg:px-8">
          <p className="text-[0.78rem] font-light text-cream/40">
            © {new Date().getFullYear()} {SITE_NAME}. {dict.footer.copyright}
          </p>
          {PHOTO_CREDITS.length > 0 && (
            <p className="mt-2 text-[0.72rem] leading-relaxed font-light text-cream/25">
              {dict.footer.photoCredits}{" "}
              {PHOTO_CREDITS.map((credit, i) => (
                <span key={`${credit.author}-${i}`}>
                  {credit.author} ({credit.license})
                  {i < PHOTO_CREDITS.length - 1 ? ", " : ""}
                </span>
              ))}{" "}
              — Wikimedia Commons.
            </p>
          )}
        </div>
        <div className="mx-auto w-full max-w-[1280px] px-6 pb-6 text-center lg:px-8">
          <a
            href="https://bnbmind.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] font-light text-amber-soft transition-colors duration-300 hover:text-cream"
          >
            {dict.footer.credit}
          </a>
        </div>
      </div>
    </footer>
  );
}
