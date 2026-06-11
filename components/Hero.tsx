"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { RESERVATION_HREF } from "@/lib/site";
// Hero fotka — pro výměnu stačí nahradit soubor public/images/hero.png
import heroImage from "@/public/images/hero.png";

const BENEFITS = [
  "Až pro 4 osoby",
  "Sauna v ceně",
  "Terasa",
  "Gril",
  "Wi-Fi",
  "Parkování u domečku",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.13, delayChildren: 0.35 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="uvod" className="relative flex min-h-svh flex-col">
      {/* Fotka na pozadí */}
      <motion.div
        initial={reduceMotion ? false : { scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 overflow-hidden"
      >
        <Image
          src={heroImage}
          alt="Tiny house Glampidol se saunou v trnkovém sadu při západu slunce"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay — čitelnost textu bez ztráty golden hour atmosféry */}
      <div className="absolute inset-0 bg-gradient-to-r from-bark/75 via-bark/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
      <div className="absolute inset-0 bg-amber/8 mix-blend-soft-light" />

      {/* Obsah */}
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-6 pt-32 pb-28 lg:px-8 lg:pb-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow — pill badge */}
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-cream/25 bg-bark/40 px-4 py-2 font-display text-[0.72rem] font-medium tracking-[0.18em] text-cream/90 uppercase backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-soft" />
            Glamping v trnkovém sadu u Vizovických vrchů
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-7 font-display text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-cream sm:text-6xl sm:leading-[1.06] lg:text-7xl"
          >
            Vypněte město.
            <br />
            <span className="text-amber-soft">
              Zapněte <span className="whitespace-nowrap">ticho sadu.</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed font-light text-cream/85 sm:text-lg"
          >
            Soukromý tiny house s výhledem do kopců, finskou saunou v ceně
            a&nbsp;atmosférou, kvůli které se vám nebude chtít zpátky.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href={RESERVATION_HREF}
              whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-olive px-8 py-4 font-display text-sm font-semibold tracking-[0.1em] text-cream uppercase shadow-lg shadow-bark/40 transition-colors duration-300 hover:bg-olive-deep"
            >
              Ověřit volný termín
              <span aria-hidden>→</span>
            </motion.a>
            <motion.a
              href="#domecek"
              whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="inline-flex items-center justify-center rounded-full border border-cream/35 bg-cream/5 px-8 py-4 font-display text-sm font-semibold tracking-[0.1em] text-cream uppercase backdrop-blur-sm transition-colors duration-300 hover:border-cream/60 hover:bg-cream/15"
            >
              Prohlédnout domeček
            </motion.a>
          </motion.div>

          {/* Benefit line */}
          <motion.ul
            variants={item}
            className="mt-11 flex max-w-xl flex-wrap items-center gap-x-3 gap-y-2.5 text-[0.82rem] font-light text-cream/75"
          >
            {BENEFITS.map((benefit, index) => (
              <li key={benefit} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden className="text-amber-soft/70">
                    ·
                  </span>
                )}
                {benefit}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Scroll indikátor */}
      <motion.a
        href="#domecek"
        aria-label="Posunout na další sekci"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 sm:flex"
      >
        <span className="font-display text-[0.65rem] tracking-[0.28em] text-cream/60 uppercase">
          Objevte víc
        </span>
        <span className="flex h-9 w-5.5 items-start justify-center rounded-full border border-cream/35 p-1.5">
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 9, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-cream/80"
          />
        </span>
      </motion.a>
    </section>
  );
}
