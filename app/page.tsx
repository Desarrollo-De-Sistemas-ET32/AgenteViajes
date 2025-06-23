import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import PlacesSection from "@/components/PlacesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <HeroSection />
        <IntroSection />
        <PlacesSection />
      </main>
    </div>
  );
}
