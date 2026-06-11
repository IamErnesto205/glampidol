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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Benefits />
        <CabinSection />
        <SaunaSection />
        <TerraceSection />
        <AudienceSection />
        <SurroundingsSection />
        <GallerySection />
        <ReviewsSection />
        <PricingSection />
        <FAQSection />
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}
