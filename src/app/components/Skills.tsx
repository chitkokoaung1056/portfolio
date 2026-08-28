import {
  Code2,
  Smartphone,
  Database,
  Palette,
  Globe,
  Zap,
  Braces,
} from "lucide-react";

import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
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

function useCounter(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

function SkillBar({
  label,
  value,
  active,
  delay,
}: {
  label: string;
  value: number;
  active: boolean;
  delay: number;
}) {
  const animated = useCounter(value, active);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          {label}
        </span>
        <span className="text-sm font-bold tabular-nums bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          {animated}%
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-sky-500/15 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={active ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 relative"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent rounded-full animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
          <h2 className="text-4xl mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring
            ideas to life
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.skills.map((skill, index) => {
            const Icon = iconMap[skill.category] || Code2;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: isInView ? index * 0.1 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <Card className="p-6 h-full bg-card border-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-gradient-to-tr from-sky-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl mb-3 text-gray-900 dark:text-white">
                      {skill.category}
                    </h3>

                    <div className="w-full mb-4">
                      <SkillBar
                        label={skill.category}
                        value={skill.proficiency}
                        active={isInView}
                        delay={0.2 + index * 0.1}
                      />
                    </div>

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
