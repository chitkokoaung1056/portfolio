import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profileData } from "../data/profile";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Portfolio</h3>
            <p className="text-gray-400 dark:text-gray-500">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" />
            by {profileData.name} © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}