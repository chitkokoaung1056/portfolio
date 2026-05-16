export interface ProfileData {
  name: string;
  title: string;
  image: { url: string; alt: string };
  description: string;
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
  about: {
    intro: string;
    experience: string;
    passion: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
}

export const profileData: ProfileData = {
  name: "Chit Ko Ko Aung",
  title: "Computer Science Student | Full-Stack Developer",
  image: { url: "ProfilePhoto.png", alt: "Professional workspace" },
  description:
    "Final-year Computer Science student building full-stack web apps with modern JavaScript ecosystems.",
  email: "chitkokoaung1056@gmail.com",
  phone: "+959762640832",
  location: "Mandalay, Myanmar",
  social: {
    github: "https://github.com/chitkokoaung1056",
    linkedin: "https://www.linkedin.com/in/chit-ko-ko-aung-45402439b/",
  },
  about: {
    intro:
      "I'm a final-year Computer Science student at UCSM, focused on building full-stack web applications using modern technologies like Next.js, TypeScript, and Supabase.",
    experience:
      "I have built multiple real-world projects including TaskHub (task management system with Supabase auth), MovieNest (movie discovery UI with pagination and search), and various full-stack CRUD applications using Laravel, React, and Next.js.",
    passion:
      "I enjoy designing clean UI systems, building scalable backend logic, and learning infrastructure concepts. I'm especially interested in backend systems, authentication flows, and developer experience.",
  },
  skills: [
    {
      category: "Frontend",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "Shadcn UI",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Supabase", "REST APIs"],
    },
    {
      category: "Programming Languages",
      items: ["Java", "Python", "C", "C++", "Dart"],
    },
    {
      category: "Database",
      items: ["MySQL", "Supabase DB", "MongoDB"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Java + android"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "Vercel", "Figma"],
    },
  ],
};
