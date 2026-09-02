import { motion } from "motion/react";
import { profileData } from "../data/profile";

export function About() {
  return (
    <section
      id="about"
      className="py-20 overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
          <div className="absolute inset-0 rounded-2xl backdrop-blur-[16px] backdrop-saturate-150" />
          <div className="absolute inset-0 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.09)" }} />

          <div className="relative p-8 sm:p-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl mb-6 font-bold tracking-tight text-white text-center">
                About{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 mb-6 text-lg leading-relaxed"
              >
                {profileData.about.intro}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 mb-6 text-lg leading-relaxed"
              >
                {profileData.about.experience}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 text-lg leading-relaxed"
              >
                {profileData.about.passion}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
