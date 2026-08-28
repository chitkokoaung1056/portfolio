import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground overflow-y-hidden *:overflow-y-hidden">
        {/* Subtle film-grain texture for depth */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-grain opacity-[0.25] mix-blend-overlay" />

        {/* Scroll progress indicator at the very top */}
        <ScrollProgress />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}