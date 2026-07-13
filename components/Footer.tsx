import Image from "next/image";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/site";
// Stejná fotka jako v Hero
import heroImage from "@/public/images/hero.png";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

const LEGAL = [
  { label: "Obchodní podmínky", href: "#" },
  { label: "Ochrana osobních údajů", href: "#" },
];

export default function Footer() {
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
            Soukromý tiny house se saunou v trnkovém sadu u Vizovických vrchů.
            Místo, kde se vypíná město a zapíná ticho.
          </p>
        </div>

        {/* Navigace */}
        <nav aria-label="Patička — navigace">
          <h3 className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-cream/45 uppercase">
            Navigace
          </h3>
          <ul className="mt-5 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.9rem] font-light text-cream/70 transition-colors duration-300 hover:text-amber-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kontakt */}
        <div>
          <h3 className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-cream/45 uppercase">
            Kontakt
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
            <li>{CONTACT.location}</li>
          </ul>
        </div>

        {/* Sociální sítě */}
        <div>
          <h3 className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-cream/45 uppercase">
            Sledujte nás
          </h3>
          <ul className="mt-5 space-y-2.5">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
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
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center lg:px-8">
          <p className="text-[0.78rem] font-light text-cream/40">
            © {new Date().getFullYear()} {SITE_NAME}. Glamping v trnkovém sadu.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[0.78rem] font-light text-cream/40 transition-colors duration-300 hover:text-cream/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-[1280px] px-6 pb-6 text-center lg:px-8">
          <a
            href="https://bnbmind.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] font-light text-amber-soft transition-colors duration-300 hover:text-cream"
          >
            Vyrobila agentura bnbmind.cz
          </a>
        </div>
      </div>
    </footer>
  );
}
