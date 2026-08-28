import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { profileData } from "../data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden justify-center pt-16"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Circular profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, rotate: 4 }}
            className="relative mx-auto mb-8 w-44 h-44 sm:w-52 sm:h-52"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 opacity-90 blur-[2px]"
            />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-500 shadow-2xl shadow-indigo-500/40" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#1c2240] shadow-xl">
              <ImageWithFallback
                src={profileData.image.url}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-2 right-2 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-5 w-5 border-2 border-[#1c2240] bg-emerald-500" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl mb-6 font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400">
              {profileData.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-4"
          >
            {profileData.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            {profileData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex gap-6 justify-center"
          >
            {[
              { href: profileData.social.github, icon: Github, label: "GitHub" },
              { href: profileData.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${profileData.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                className="p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors shadow-lg shadow-transparent hover:shadow-indigo-500/20"
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16"
          >
            <motion.a
              href="#about"
              className="inline-block animate-bounce"
              whileHover={{ scale: 1.2 }}
            >
              <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

