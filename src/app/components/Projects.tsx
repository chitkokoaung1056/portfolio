import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { projects, ProjectCategory } from "../data/projects";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("web");

  const filteredProjects = projects.filter(
    (p) => p.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap"
        >
          <Button
            onClick={() => setActiveFilter("web")}
            variant={activeFilter === "web" ? "default" : "outline"}
            className="min-w-[110px]"
          >
            <Monitor className="h-4 w-4 mr-2" />
            Web
          </Button>

          <Button
            onClick={() => setActiveFilter("mobile")}
            variant={activeFilter === "mobile" ? "default" : "outline"}
            className="min-w-[110px]"
          >
            <Smartphone className="h-4 w-4 mr-2" />
            Mobile
          </Button>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <Card className="overflow-hidden h-full flex flex-col dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                
                {/* IMAGE SECTION - Responsive for both web and mobile */}
                {project.category === "mobile" ? (
                  /* 📱 MOBILE DEVICE MOCKUP */
                  <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 py-8 px-4 flex items-center justify-center">
                    {/* Phone Frame */}
                    <div className="relative w-[200px] sm:w-[220px] md:w-[240px] aspect-[9/19] rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-black shadow-2xl overflow-hidden bg-black">
                      {/* Dynamic Island / Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] sm:w-[120px] h-[25px] sm:h-[30px] bg-black rounded-b-xl z-10 flex items-center justify-center">
                        <div className="w-[40%] h-[6px] sm:h-[8px] bg-gray-800 rounded-full" />
                      </div>
                      
                      {/* Screen Content */}
                      <div className="w-full h-full overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[100px] sm:w-[120px] h-[4px] sm:h-[5px] bg-white/30 rounded-full" />
                    </div>
                    
                    {/* Optional: Side buttons */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] sm:w-[4px] h-12 bg-black rounded-l-md" />
                    <div className="absolute right-0 top-1/3 w-[3px] sm:w-[4px] h-16 bg-black rounded-r-md" />
                  </div>
                ) : (
                  /* 💻 WEB PROJECT IMAGE */
                  <div className="relative aspect-video overflow-hidden group bg-gray-100 dark:bg-gray-700">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* DARK GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity pointer-events-none" />

                    {/* SOFT SHINE DOT */}
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/80 blur-sm opacity-80" />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    <Badge variant="outline" className="text-xs">
                      {project.category === "web" ? (
                        <>
                          <Monitor className="h-3 w-3 mr-1" />
                          Web
                        </>
                      ) : (
                        <>
                          <Smartphone className="h-3 w-3 mr-1" />
                          Mobile
                        </>
                      )}
                    </Badge>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3 flex-wrap mt-auto">
                    {project.demoUrl ? (
                      <Button asChild size="sm">
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
                      <Button variant="outline" size="sm" disabled>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Coming Soon
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm">
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}