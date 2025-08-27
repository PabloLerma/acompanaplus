import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import whatsappIcon from "@/assets/whatsapp-icon.svg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/611892191"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
