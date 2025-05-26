import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { SERVICES } from "../utils/constants";
import {
  fadeInUp,
  staggerContainer,
  slideUpSpring,
  hoverLift,
} from "../utils/animations";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-850 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            <span className="gradient-text">Premium</span> Detailing Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-balance">
            Choose from our range of professional detailing services, each
            crafted to restore and protect your vehicle with precision and care.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                service.popular
                  ? "bg-gradient-to-br from-blue-900/60 to-blue-800/60 border-2 border-blue-500/60 shadow-lg shadow-blue-500/20 backdrop-blur-sm"
                  : "bg-gray-800/60 border border-gray-700/60 backdrop-blur-sm hover:border-gray-600/60"
              }`}
              variants={slideUpSpring}
              whileHover={hoverLift}
              custom={index}
            >
              {service.popular && (
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 py-3 px-4 flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Star size={16} className="fill-white text-white" />
                  <span className="text-white font-semibold">Most Popular</span>
                </motion.div>
              )}

              <div className="p-8 lg:p-10">
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-white mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {service.name}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="text-4xl font-bold gradient-text mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  {service.price}
                </motion.div>

                <motion.ul
                  className="space-y-3 mb-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.6 + index * 0.1,
                      },
                    },
                  }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start gap-2"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Check
                        size={20}
                        className="text-blue-400 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    service.popular
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl"
                      : "bg-gray-700/80 text-white hover:bg-gray-600/80 border border-gray-600/50 hover:border-gray-500/50"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book This Package
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
