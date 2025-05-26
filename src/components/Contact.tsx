import React from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to transform your vehicle? Contact us today to discuss your
              detailing needs or book an appointment via Instagram.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Phone size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Mail size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-gray-400">info@detailmaster.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <MapPin size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Service Area</h3>
                  <p className="text-gray-400">Greater Los Angeles Area</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Mobile service available within 25 miles
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-full">
                  <Instagram size={24} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Instagram</h3>
                  <p className="text-gray-400">@detailmaster</p>
                  <p className="text-gray-500 text-sm mt-1">
                    DM to book your appointment for MAY
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105"
              >
                Book on Instagram
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-purple-500/10 rounded-full filter blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/6873174/pexels-photo-6873174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Car detailing process"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
