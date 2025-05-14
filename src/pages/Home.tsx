
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <main className="pt-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
};

export default Home;
