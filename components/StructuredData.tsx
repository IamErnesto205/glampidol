import { localePath, type Dictionary, type Locale } from "@/lib/i18n";
import { IMAGES } from "@/lib/images";
import {
  ADDRESS,
  BOOKING_URL,
  CONTACT,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
} from "@/lib/site";

/**
 * Strukturovaná data (JSON-LD) pro Google — říkají mu, že „Glampidol“ je
 * název webu a ubytování v Lípě, ne překlep slova „glamping“. Patří jen
 * na úvodní stránku. Ověření: https://search.google.com/test/rich-results
 */
export default function StructuredData({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const absolute = (path: string) => `${SITE_URL}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: dict.htmlLang,
        publisher: { "@id": `${SITE_URL}/#lodging` },
      },
      {
        "@type": "LodgingBusiness",
        "@id": `${SITE_URL}/#lodging`,
        name: SITE_NAME,
        description: dict.meta.description,
        url: absolute(localePath(locale)),
        image: [
          OG_IMAGE.url,
          IMAGES.cabinExterior,
          IMAGES.sauna,
          IMAGES.interior,
        ].map(absolute),
        telephone: CONTACT.phone,
        email: CONTACT.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: ADDRESS.locality,
          addressRegion: ADDRESS.region,
          addressCountry: ADDRESS.country,
        },
        // Profily, které patří ke stejnému ubytování — Google je spojí v jednu entitu.
        sameAs: [...SOCIALS.map((social) => social.href), BOOKING_URL],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
