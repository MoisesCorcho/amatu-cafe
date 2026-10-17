import { HeroSection } from "@/components/sections/hero-section";
import { StorySection } from "@/components/sections/story-section";
import { CatalogSection } from "@/components/sections/catalog-section";
import { AboutSection } from "@/components/sections/about-section";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <StorySection />
      <CatalogSection />
      <AboutSection />
    </main>
  );
}
