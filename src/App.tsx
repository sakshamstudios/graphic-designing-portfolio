import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground"; // ✅ Correct import
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function App() {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
