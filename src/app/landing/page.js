"use client"
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeatureSlider from "@/components/landing/FeatureSlider";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

export default function Page() {
  return (

    /* Supprimer le scroll interne pour éviter un scroll dans le scroll principal */

    <div className="w-full h-screen bg-white">

      <Header />

      <HeroSection />

      <FeatureSlider />

      <ContactForm />

      <Footer/>


    </div>
  );
}
