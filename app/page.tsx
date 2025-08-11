import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import PlacesSection from "@/components/PlacesSection";

export default function Home() {
  return (    
    <div className="min-h-screen bg-background">
    <main className="max-w-7xl mx-auto">
      <HeroSection />
      <IntroSection />
      <PlacesSection />
    </main>
    </div>
  );
}
