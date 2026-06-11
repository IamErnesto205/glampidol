"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { FAQ_ITEMS } from "@/lib/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <Eyebrow>Časté dotazy</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-4xl">
            Na co se ptáte nejčastěji
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="divide-y divide-sand border-y border-sand">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-olive/30 text-lg font-light text-olive"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          reduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[0.95rem] leading-[1.85] font-light text-ink/70">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
