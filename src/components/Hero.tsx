import React from "react";
import { motion } from "framer-motion";
import { Instagram, ChevronDown } from "lucide-react";
import {
  heroTitle,
  heroSubtitle,
  heroButtons,
  floatingAnimation,
} from "../utils/animations";

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/60 to-gray-950/90 z-10"></div>
        <img
          src="https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Car being detailed"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center pt-28 sm:pt-24 md:pt-32 lg:pt-0 flex flex-col justify-center min-h-screen">
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight"
            variants={heroTitle}
            initial="hidden"
            animate="visible"
          >
            <span className="block text-balance">
              Professional Car Detailing
            </span>
            <span className="block mt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text pb-1">
              For Every Vehicle
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance px-2 sm:px-0"
            variants={heroSubtitle}
            initial="hidden"
            animate="visible"
          >
            Expert detailing services that bring out the best in your car. From
            daily drivers to luxury vehicles, we treat every car with the same
            dedication and precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 sm:mb-20 px-4 sm:px-0"
            variants={heroButtons}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base px-5 py-2.5 sm:px-7 sm:py-3 shadow-glow hover:shadow-glow-lg w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram size={16} className="sm:w-4 sm:h-4" />
              <span>Book Now</span>
            </motion.a>

            <motion.button
              onClick={scrollToServices}
              className="btn-secondary flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base px-5 py-2.5 sm:px-7 sm:py-3 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Services</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center">
          <motion.div animate={floatingAnimation}>
            <motion.button
              onClick={scrollToServices}
              aria-label="Scroll down"
              className="text-white/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronDown size={28} className="sm:w-8 sm:h-8" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
