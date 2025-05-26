import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { pageTransition } from "./utils/animations";

function App() {
  useEffect(() => {
    // Update document title
    document.title = "DetailMaster | Premium Car Detailing Services";

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e: Event) {
        e.preventDefault();

        const target = e.target as HTMLAnchorElement;
        const targetId = target.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden"
      {...pageTransition}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.01)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
