import { Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "../data/profile";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/[0.06]">
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
      <div className="absolute inset-0 backdrop-blur-[16px] backdrop-saturate-150" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4 font-semibold text-white">
              Chit Ko Ko Aung
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-500 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-white text-sm transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-semibold text-white">Connect</h3>
            <div className="flex gap-4">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
