"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { NAV_LINKS, RESERVATION_HREF, SITE_NAME } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-500 ${
        scrolled
          ? "border-b border-cream/10 bg-bark/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 transition-[padding] duration-500 lg:px-8 ${
          scrolled ? "py-3.5" : "py-5 lg:py-7"
        }`}
      >
        {/* Logo */}
        <a
          href="#uvod"
          onClick={() => setMenuOpen(false)}
          className="font-display text-xl font-semibold tracking-[0.22em] text-cream uppercase"
        >
          {SITE_NAME}
        </a>

        {/* Desktop navigace */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-display text-[0.8rem] font-medium tracking-[0.14em] text-cream/80 uppercase transition-colors duration-300 hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-amber-soft transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.a
          href={RESERVATION_HREF}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="hidden rounded-full border border-cream/35 bg-cream/5 px-6 py-2.5 font-display text-[0.8rem] font-semibold tracking-[0.12em] text-cream uppercase backdrop-blur-sm transition-colors duration-300 hover:border-cream/60 hover:bg-cream/15 lg:inline-block"
        >
          Rezervovat pobyt
        </motion.a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3.5 w-6">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 left-0 block h-px w-full bg-cream"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-0 block h-px w-full bg-cream"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-0 left-0 block h-px w-full bg-cream"
            />
          </span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-bark/95 backdrop-blur-lg lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.15 },
                },
              }}
              className="flex flex-1 flex-col items-center justify-center gap-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="font-display text-2xl font-medium tracking-[0.16em] text-cream/90 uppercase transition-colors hover:text-cream"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={RESERVATION_HREF}
                onClick={() => setMenuOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-4 rounded-full border border-cream/40 px-8 py-3.5 font-display text-base font-semibold tracking-[0.12em] text-cream uppercase"
              >
                Rezervovat pobyt
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
