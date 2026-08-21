import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { profileData } from "../data/profile";

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#141428] overflow-x-hidden"
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
            <h2 className="text-4xl mb-6 font-bold tracking-tight text-gray-900 dark:text-white">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
                Me
              </span>
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
            className="relative flex justify-center"
          >
            {/* CIRCULAR PHOTO WITH GRADIENT RING */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 opacity-80 blur-lg" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#171730] shadow-2xl">
                <ImageWithFallback
                  src={profileData.image.url}
                  alt={profileData.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
