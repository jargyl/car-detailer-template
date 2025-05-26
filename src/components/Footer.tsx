import React from "react";
import { Car, Instagram, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car size={24} className="text-blue-400" />
              <span className="font-bold text-xl">DetailMaster</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium car detailing services that bring out the best in your
              vehicle.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-700 p-2 rounded-full hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@detailmaster.com"
                className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/30 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-blue-400" />
              </a>
              <a
                href="tel:5551234567"
                className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/30 transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} className="text-blue-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Basic Wash & Wax
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Premium Detail
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ultimate Showroom
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Paint Correction
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ceramic Coating
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <Phone size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-400">info@detailmaster.com</span>
              </li>
              <li className="flex gap-2 items-start">
                <Instagram size={18} className="text-pink-400 mt-1" />
                <span className="text-gray-400">@detailmaster</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} DetailMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
