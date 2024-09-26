import ContactUs from "@/components/ContactUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCarts from "@/components/TestimonialCarts";
import UpComimgSebinar from "@/components/UpComimgSebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCarts />
      <UpComimgSebinar />
      <ContactUs />
      <Footer />
    </main>
  );
}
