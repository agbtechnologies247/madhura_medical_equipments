import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductShowcase from "@/components/ProductShowcase";
import Statistics from "@/components/Statistics";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ProductShowcase />
      <Statistics />
      <Timeline />
      <Testimonials />
      <Footer />
    </main>
  );
}
