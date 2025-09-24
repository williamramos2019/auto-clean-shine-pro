import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Calculator from "@/components/Calculator";
import BookingSystem from "@/components/BookingSystem";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <Calculator />
      <BookingSystem />
      <Gallery />
      <Testimonials />
      <FAQ />
    </Layout>
  );
};

export default Index;
