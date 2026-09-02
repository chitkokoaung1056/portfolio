import {
  Code2,
  Smartphone,
  Database,
  Palette,
  Globe,
  Zap,
  Braces,
} from "lucide-react";

import { motion } from "motion/react";
import { profileData } from "../data/profile";

const iconMap: Record<string, any> = {
  Frontend: Code2,
  Backend: Database,
  "Programming Languages": Braces,
  Database: Database,
  Mobile: Smartphone,
  "Tools & DevOps": Zap,
  "Web Technologies": Globe,
  "UI/UX Design": Palette,
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 font-bold tracking-tight text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring
            ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.skills.map((skill) => {
            const Icon = iconMap[skill.category] || Code2;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="will-change-transform"
              >
                <div className="relative p-6 h-full rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
                  <div className="absolute inset-0 rounded-2xl backdrop-blur-[16px] backdrop-saturate-150" />
                  <div className="absolute inset-0 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.09)" }} />
                  
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#3b82f6]/5 via-transparent to-[#60a5fa]/5" />

                  <div className="relative flex flex-col items-start">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-lg mb-3 text-white font-semibold">
                      {skill.category}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.items.join(", ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
