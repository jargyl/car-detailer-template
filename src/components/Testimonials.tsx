import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../utils/constants";
import {
  fadeInUp,
  staggerContainer,
  slideUp,
  hoverLift,
} from "../utils/animations";

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our detailing services.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg border border-gray-700 transition-transform duration-300"
              variants={slideUp}
              whileHover={hoverLift}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex mb-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.5 + index * 0.2,
                    },
                  },
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0, rotate: -180 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        transition: { type: "spring", stiffness: 200 },
                      },
                    }}
                  >
                    <Star
                      size={20}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-gray-300 mb-6 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
              >
                "{testimonial.quote}"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
              >
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.vehicle}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ready to experience the difference? Book now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
