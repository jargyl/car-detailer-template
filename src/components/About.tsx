import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, Shield } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  slideUp,
} from "../utils/animations";

const About: React.FC = () => {
  const features = [
    { icon: Award, title: "Quality Guaranteed" },
    { icon: CheckCircle, title: "Premium Products" },
    { icon: Clock, title: "Timely Service" },
    { icon: Shield, title: "Vehicle Protection" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Car detailer at work"
                className="w-full h-auto"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-lg max-w-xs hidden md:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <p className="font-medium">
                "My passion is bringing out the true beauty in every vehicle I
                touch."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              About DetailMaster
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              With over 5 years of experience in premium auto detailing, I've
              built a reputation for delivering exceptional results that exceed
              expectations. My journey began with a passion for cars and a
              meticulous attention to detail.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                },
              }}
            >
              I believe every vehicle deserves the highest level of care, which
              is why I use only premium products and techniques to restore and
              protect your investment. From family cars to exotic sports cars, I
              treat each vehicle as if it were my own.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex flex-col items-center text-center bg-gray-800/50 p-4 rounded-lg"
                    variants={slideUp}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.6 + index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <IconComponent size={32} className="text-blue-400 mb-2" />
                    </motion.div>
                    <motion.h3
                      className="text-white font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {feature.title}
                    </motion.h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
