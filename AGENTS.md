<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Glampidol — kontext projektu

Web pro prémiový glamping / tiny house **Glampidol** v Lípě u Vizovických vrchů (Zlínský kraj). Stojí uprostřed trnkového sadu, má finskou saunu v ceně, terasu, gril, ohniště. Kapacita je **2 osoby + 1** na rozkládací pohovce (třetí místo má nižší komfort — nezamlčovat to). Cílový pocit: golden hour, ticho sadu, soukromí, wellness, útěk od města. Web nesmí působit jako generická AI šablona ani booking portál.

## Stack a konvence

- Next.js 16 (App Router) + Tailwind 4 + TypeScript + framer-motion
- Jedna stránka (`app/[lang]/page.tsx`) skládaná ze sekcí v `components/` — každá sekce je samostatná komponenta
- Kód a commity bez diakritiky v identifikátorech
- Scroll/entrance animace přes `components/Reveal.tsx` (framer-motion, respektuje `prefers-reduced-motion`); animace držet jemné, nepřehánět

## Vícejazyčnost — DŮLEŽITÉ

Web běží ve třech jazycích: **čeština, angličtina, němčina**, každý pod svou předponou (`/cs`, `/en`, `/de`). `/` přesměrovává na `/cs`.

- **Žádné texty v komponentách.** Komponenty dostávají `dict` (a kde je potřeba `locale`) jako prop a berou z něj úplně všechno — včetně alt textů a popisků fotek.
- Slovníky jsou v `lib/i18n/`. **`cs.ts` je zdroj pravdy**, `en.ts` a `de.ts` jsou proti němu typované — přidání klíče do češtiny shodí build, dokud nedoplníte i zbylé dva jazyky. Proto v `cs.ts` záměrně **není `as const`**.
- `lib/i18n/meta.ts` (názvy jazyků pro přepínač) je schválně mimo slovníky — `Header.tsx` je klientská komponenta a import slovníků by natáhl všechny jazyky do JS bundlu.
- Odkazy uvnitř webu vždy přes `localePath(locale, cesta)`, nikdy natvrdo `/galerie`.

## Brand — DODRŽOVAT

- **Primární barva: olivová `#5C603B`** (token `olive`, tmavší hover `olive-deep`)
- **Sekundární akcent: zlatavá `#E3C393`** (token `amber-soft`)
- Ostatní tokeny (cream, linen, sand, bark, ink…) v `app/globals.css` — barvy vždy přes tokeny, žádné ad-hoc hex hodnoty v komponentách
- Fonty: **Raleway** (nadpisy, logo, navigace), **Merriweather Sans** (body) — lokální v `app/fonts/`, načítané v `app/layout.tsx`. Jiné fonty nepoužívat.
- Logo je zatím jen text „Glampidol“ v Raleway
- Žádné křiklavé barvy, velkorysý whitespace, decentní border-radius a stíny

## Copywriting

Zakázané generické fráze: „nezapomenutelný zážitek“, „oáza klidu“, „dokonalé místo k odpočinku“, „luxusní ubytování v přírodě“, „unikátní koncept“. Místo nich konkrétní obrazy: ticho sadu, výhled do kopců, večer po sauně, terasa při západu slunce, ráno u velkého okna, soukromí mezi trnkami.

## Kde se co mění

- **Všechny texty** (ceník, FAQ, benefity, vybavení, výlety, recenze, alt texty, popisky galerie): `lib/i18n/cs.ts` + `en.ts` + `de.ts`
- **Cesty k fotkám**: `lib/images.ts` (jen `src`, alt texty jsou ve slovnících pod stejným klíčem). Hero fotka = `public/images/hero.png` (stačí přepsat soubor).
- **Odkazy na weby výletů, fotky výletů, licenční kredity**: `lib/content.ts`
- **Kotvy navigace, kontakty, název, URL inzerátu**: `lib/site.ts`
- **Barvy a fonty**: `app/globals.css` + `app/[lang]/layout.tsx`
- **SEO metadata a hreflang**: `app/[lang]/layout.tsx`

## Rezervace

Web **nemá vlastní rezervační formulář**. Sekce `ReservationSection.tsx` odkazuje na inzerát na e-chalupy.cz (`BOOKING_URL` v `lib/site.ts`), kde je kalendář obsazenosti. Nevracet mailto formulář zpět.

## Fotky výletů — licence

Fotky v `public/images/trips/` jsou z Wikimedia Commons pod CC BY / CC BY-SA. **Uvedení autora v patičce je podmínka jejich použití** — nemazat ho, dokud tam ty fotky jsou. Při výměně za vlastní fotku smažte u dané položky `credit` v `lib/content.ts` a řádek v patičce zmizí sám.

## Dočasné placeholdery (čekají na reálná data)

- Recenze jsou ukázkové (označené v UI)
- Odkazy na sociální sítě vedou na `#`
- Web neuvádí obchodní podmínky ani GDPR — obojí odstraněno na přání klienta. Až přibude analytika nebo formulář, bude potřeba je vrátit.
