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
      <div className="relative min-h-screen text-foreground overflow-y-hidden *:overflow-y-hidden">
        <div className="fixed inset-0 z-0 bg-[#0a0e14]" />
        <div className="fixed inset-0 z-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '56px 56px'
        }} />
        <div className="fixed top-0 left-0 w-[520px] h-[520px] bg-[#60a5fa] opacity-20 blur-[120px] rounded-full z-0" />
        <div className="fixed top-0 right-0 w-[460px] h-[460px] bg-[#3b82f6] opacity-15 blur-[120px] rounded-full z-0" />
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#22d3ee] opacity-10 blur-[120px] rounded-full z-0" />
        <div className="pointer-events-none fixed inset-0 z-0 bg-grain opacity-[0.25] mix-blend-overlay" />

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