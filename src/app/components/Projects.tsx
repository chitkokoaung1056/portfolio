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

  const filteredProjects = projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          <Button
            onClick={() => setActiveFilter("web")}
            variant={activeFilter === "web" ? "default" : "outline"}
            className="min-w-[120px]"
          >
            <Monitor className="h-4 w-4 mr-2" />
            Web
          </Button>
          <Button
            onClick={() => setActiveFilter("mobile")}
            variant={activeFilter === "mobile" ? "default" : "outline"}
            className="min-w-[120px]"
          >
            <Smartphone className="h-4 w-4 mr-2" />
            Mobile
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col dark:bg-gray-800 dark:border-gray-700">
                <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl text-gray-900 dark:text-white">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category === "web" ? (
                        <><Monitor className="h-3 w-3 mr-1" />Web</>
                      ) : (
                        <><Smartphone className="h-3 w-3 mr-1" />Mobile</>
                      )}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {project.demoUrl ? (
                      <Button asChild variant="default" size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch Demo
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo Coming Soon
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
