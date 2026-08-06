import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Benefits from "@/components/Benefits";
import CabinSection from "@/components/CabinSection";
import SaunaSection from "@/components/SaunaSection";
import TerraceSection from "@/components/TerraceSection";
import AudienceSection from "@/components/AudienceSection";
import SurroundingsSection from "@/components/SurroundingsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Header dict={dict} locale={lang} />
      <main className="flex-1">
        <Hero dict={dict} locale={lang} />
        <Intro dict={dict} />
        <Benefits dict={dict} />
        <CabinSection dict={dict} />
        <SaunaSection dict={dict} />
        <TerraceSection dict={dict} />
        <AudienceSection dict={dict} />
        <SurroundingsSection dict={dict} />
        <GallerySection dict={dict} locale={lang} />
        <ReviewsSection dict={dict} />
        <PricingSection dict={dict} locale={lang} />
        <FAQSection dict={dict} />
        <ReservationSection dict={dict} />
      </main>
      <Footer dict={dict} locale={lang} />
    </>
  );
}
