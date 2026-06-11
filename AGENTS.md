<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Glampidol — kontext projektu

Web pro prémiový glamping / tiny house **Glampidol** v Lípě u Vizovických vrchů (Zlínský kraj). Stojí uprostřed trnkového sadu, má finskou saunu v ceně, terasu, gril, ohniště, až 4 osoby. Cílový pocit: golden hour, ticho sadu, soukromí, wellness, útěk od města. Web nesmí působit jako generická AI šablona ani booking portál.

## Stack a konvence

- Next.js 16 (App Router) + Tailwind 4 + TypeScript + framer-motion
- Jedna stránka (`app/page.tsx`) skládaná ze sekcí v `components/` — každá sekce je samostatná komponenta
- Texty webu jsou česky; kód a commity bez diakritiky v identifikátorech
- Scroll/entrance animace přes `components/Reveal.tsx` (framer-motion, respektuje `prefers-reduced-motion`); animace držet jemné, nepřehánět

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

- **Fotky**: `lib/images.ts` — teď placeholdery z Unsplash; reálné fotky nahrát do `public/images/` a přepsat `src`. Hero fotka = `public/images/hero.png` (stačí přepsat soubor).
- **Ceník, FAQ, benefity, vybavení, výlety, recenze, galerie**: `lib/content.ts`
- **Navigace, kontakty, název**: `lib/site.ts`
- **Barvy a fonty**: `app/globals.css` + `app/layout.tsx`
- **SEO metadata**: `app/layout.tsx`

## Dočasné placeholdery (čekají na reálná data)

- Kontakt: +420 000 000 000 / info@glampidol.cz
- Recenze jsou ukázkové (označené v UI)
- Odkazy na Obchodní podmínky, GDPR a sociální sítě vedou na `#`
- Rezervační formulář (`components/ReservationSection.tsx`) nemá backend — otevírá mailto; později napojit na API route / rezervační systém
