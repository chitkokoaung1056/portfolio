import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profileData } from "../data/profile";

export function Footer() {
  return (
    <footer className="text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 font-bold">
              CKKA
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4 font-bold">Connect</h3>
            <div className="flex gap-4">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 -m-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 -m-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className="p-2 -m-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-cyan-400 fill-current" />
            by {profileData.name} © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
