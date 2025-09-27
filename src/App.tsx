import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductCatalog from "./components/ProductCatalog";
import OffersCarousel from "./components/OffersCarousel";
import Reviews from "./components/Reviews";
import ContactWhatsApp from "./components/ContactWhatsApp";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />
      {/* Offers Section */}
      <OffersCarousel />

      {/* Product Catalog */}
      <ProductCatalog />

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Form */}
      <ContactWhatsApp />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
