import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Car } from "lucide-react";
import { fadeInDown, staggerContainerFast } from "../utils/animations";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-xl py-3 shadow-large border-b border-white/5"
          : "bg-transparent py-6"
      }`}
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="flex items-center gap-3 text-white group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
            <Car size={24} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            DetailMaster
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          variants={staggerContainerFast}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition-all duration-300 relative font-medium group"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
          ))}
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 shadow-glow hover:shadow-glow-lg"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Instagram size={18} />
            <span>Book Now</span>
          </motion.a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="container mx-auto px-4 py-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-8">
                <motion.a
                  href="#"
                  className="flex items-center gap-2 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Car size={28} className="text-blue-400" />
                  <span className="font-bold text-xl tracking-tight">
                    DetailMaster
                  </span>
                </motion.a>
                <motion.button
                  onClick={toggleMenu}
                  className="text-white"
                  aria-label="Close menu"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <motion.nav
                className="flex flex-col space-y-6"
                variants={staggerContainerFast}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-white text-2xl font-medium"
                    onClick={toggleMenu}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 10, color: "#60a5fa" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 mt-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={20} />
                  <span>Book Now on Instagram</span>
                </motion.a>
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
