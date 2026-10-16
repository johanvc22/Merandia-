import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import ProcessSection from './components/ProcessSection';
import StatsSection from './components/StatsSection';
import ProductsSection from './components/ProductsSection';
import DistributorsSection from './components/DistributorsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ProcessSection />
      <StatsSection />
      <ProductsSection />
      <DistributorsSection />
      <CTASection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
