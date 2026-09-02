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
    proficiency: number;
  }[];
}

export const profileData: ProfileData = {
  name: "Chit Ko Ko Aung",
  title: "Computer Science Student | Full-Stack Developer",
  image: { url: "profile.jpg", alt: "Chit Ko Ko Aung" },
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
      "I'm a final-year Computer Science student at the University of Computer Studies, Mandalay, focused on building modern web applications with TypeScript, React, Next.js, Node.js, and Supabase.",
    experience:
      "I enjoy solving problems, building real-world projects, and learning how to design reliable and scalable software.",
    passion:
      "I'm currently seeking an internship or junior software developer role where I can contribute, learn, and grow as a software engineer.",
  },
  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Bootstrap"],
      proficiency: 92,
    },
    {
      category: "Backend",
      items: ["Node.js", "REST APIs", "Supabase"],
      proficiency: 85,
    },
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Java"],
      proficiency: 88,
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB"],
      proficiency: 80,
    },
    {
      category: "Mobile",
      items: ["React Native"],
      proficiency: 75,
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Vercel", "Postman"],
      proficiency: 90,
    },
  ],
};
