import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { projects, ProjectCategory } from "../data/projects";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("web");

  const filteredProjects = projects.filter(
    (p) => p.category === activeFilter
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 font-bold tracking-tight text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          <Button
            onClick={() => setActiveFilter("web")}
            variant={activeFilter === "web" ? "default" : "ghost"}
            className={`min-w-[110px] ${
              activeFilter === "web"
                ? "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:opacity-90 text-white shadow-lg shadow-[#3b82f6]/20"
                : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Monitor className="h-4 w-4 mr-2" />
            Web
          </Button>

          <Button
            onClick={() => setActiveFilter("mobile")}
            variant={activeFilter === "mobile" ? "default" : "ghost"}
            className={`min-w-[110px] ${
              activeFilter === "mobile"
                ? "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:opacity-90 text-white shadow-lg shadow-[#3b82f6]/20"
                : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Smartphone className="h-4 w-4 mr-2" />
            Mobile
          </Button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="will-change-transform"
              >
                <div className="relative h-full rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
                  <div className="absolute inset-0 rounded-2xl backdrop-blur-[16px] backdrop-saturate-150" />
                  <div className="absolute inset-0 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.09)" }} />
                  
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    {project.category === "mobile" ? (
                      <div className="relative bg-gradient-to-b from-[#0f1420] to-[#0a0e14] py-8 px-4 flex items-center justify-center">
                        <div className="relative w-[200px] sm:w-[220px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-black shadow-2xl overflow-hidden bg-black">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-xl z-10 flex items-center justify-center">
                            <div className="w-[40%] h-[8px] bg-gray-800 rounded-full" />
                          </div>
                          <div className="w-full h-full overflow-hidden">
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/30 rounded-full" />
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-12 bg-black rounded-l-md" />
                        <div className="absolute right-0 top-1/3 w-[4px] h-16 bg-black rounded-r-md" />
                      </div>
                    ) : (
                      <div className="relative aspect-video overflow-hidden bg-[#0f1420]">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0"
                        >
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-lg text-white font-semibold">
                          {project.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-gradient-to-r from-[#3b82f6]/20 to-[#60a5fa]/20 text-[#60a5fa] border border-[#3b82f6]/30">
                          {project.category === "web" ? (
                            <span className="flex items-center">
                              <Monitor className="h-3 w-3 mr-1" />
                              Web
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Smartphone className="h-3 w-3 mr-1" />
                              Mobile
                            </span>
                          )}
                        </span>
                      </div>

                      <p className="text-gray-400 mb-4 flex-1 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-gray-300 border border-white/[0.08]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 flex-wrap mt-auto">
                        {project.demoUrl ? (
                          <Button asChild size="sm" className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:opacity-90 text-white shadow-lg shadow-[#3b82f6]/20">
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm" disabled className="text-gray-500 bg-white/[0.02]">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Coming Soon
                          </Button>
                        )}

                        {project.githubUrl && (
                          <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/[0.04]">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}