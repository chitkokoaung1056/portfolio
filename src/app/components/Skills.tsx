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
import { Card } from "./ui/card";
import { profileData } from "../data/profile";

const iconMap: Record<string, any> = {
  Frontend: Code2,
  Backend: Database,
  "Programming Languages": Braces, // ✅ different icon now
  Database: Database,
  Mobile: Smartphone,
  "Tools & DevOps": Zap,
  "Web Technologies": Globe,
  "UI/UX Design": Palette,
};
export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring
            ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.skills.map((skill, index) => {
            const Icon = iconMap[skill.category] || Code2;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow dark:bg-gray-900 dark:border-gray-700">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>

                    <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                      {skill.category}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.items.join(", ")}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
