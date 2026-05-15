import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { profileData } from "../data/profile";

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              {profileData.about.intro}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              {profileData.about.experience}
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {profileData.about.passion}
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* IMAGE WRAPPER */}
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              <ImageWithFallback
                src={profileData.image.url}
                alt={profileData.image.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* DECORATIVE BOX 1 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-2xl -z-10"
            />

            {/* DECORATIVE BOX 2 */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600 dark:bg-purple-500 rounded-2xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}