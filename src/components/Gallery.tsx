import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_IMAGES } from "../utils/constants";
import {
  fadeInUp,
  staggerContainer,
  slideUp,
  hoverScale,
} from "../utils/animations";

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setCurrentImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setCurrentImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (currentImage === null) return;

    const currentIndex = GALLERY_IMAGES.findIndex(
      (img) => img.id === currentImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : GALLERY_IMAGES.length - 1;
    } else {
      newIndex =
        currentIndex < GALLERY_IMAGES.length - 1 ? currentIndex + 1 : 0;
    }

    setCurrentImage(GALLERY_IMAGES[newIndex].id);
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Before & After
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the transformation our detailing services can bring to your
            vehicle.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300"
              onClick={() => openLightbox(image.id)}
              variants={slideUp}
              whileHover={hoverScale}
              whileTap={{ scale: 0.95 }}
            >
              <div className="grid grid-cols-2 gap-2">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-medium py-1 px-2 rounded">
                    Before
                  </div>
                  <img
                    src={image.before}
                    alt={`Before - ${image.description}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded">
                    After
                  </div>
                  <img
                    src={image.after}
                    alt={`After - ${image.description}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <motion.div
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <p className="text-white font-medium">{image.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {currentImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={closeLightbox}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={32} />
              </motion.button>

              <motion.button
                className="absolute left-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => navigateImage("prev")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={40} />
              </motion.button>

              <motion.button
                className="absolute right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => navigateImage("next")}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={40} />
              </motion.button>

              {currentImage !== null && (
                <motion.div
                  className="w-full max-w-6xl px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-sm font-medium py-1 px-3 rounded">
                        Before
                      </div>
                      <img
                        src={
                          GALLERY_IMAGES.find((img) => img.id === currentImage)
                            ?.before
                        }
                        alt="Before"
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                    </motion.div>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <div className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-medium py-1 px-3 rounded">
                        After
                      </div>
                      <img
                        src={
                          GALLERY_IMAGES.find((img) => img.id === currentImage)
                            ?.after
                        }
                        alt="After"
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                    </motion.div>
                  </div>
                  <motion.p
                    className="text-white text-center mt-4 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    {
                      GALLERY_IMAGES.find((img) => img.id === currentImage)
                        ?.description
                    }
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
