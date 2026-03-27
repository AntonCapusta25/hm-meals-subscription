"use client";


import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import CuisineShowcase from "@/components/CuisineShowcase";
import OccasionsCarousel from "@/components/OccasionsCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import ProblemSolution from "@/components/ProblemSolution";
import Testimonials from "@/components/Testimonials";
import CitiesMarquee from "@/components/CitiesMarquee";
import FAQ from "@/components/FAQ";
import { CityProvider } from "@/contexts/CityContext";


export default function Home() {
  return (
    <CityProvider>
      <main className="relative min-h-screen bg-cream">
        <Navbar />
        <Hero />
        <Partners />
        <ProblemSolution />
        <CuisineShowcase />
        <OccasionsCarousel />
        <Testimonials />
        <CitiesMarquee />
        <HowItWorks />
        <FAQ />

        <Footer />
      </main>
    </CityProvider>
  );
}
