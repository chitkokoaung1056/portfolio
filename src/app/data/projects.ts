export type ProjectCategory = "web" | "mobile";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "TaskHub",
    description:
      "A full-stack task management system with authentication, user profiles, CRUD tasks, and Supabase backend integration.",
    image: "/src/images/taskhub.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Shadcn UI"],
    category: "web",
    githubUrl: "https://github.com/chitkokoaung1056/taskhub",
  },
  {
    title: "MovieNest",
    description:
      "Modern movie discovery UI built with Next.js featuring search, trending section, pagination, and responsive design.",
    image: "/src/images/movienest.png",
    tags: ["Next.js", "React", "Tailwind", "Pagination UI"],
    category: "web",
    githubUrl: "https://github.com/chitkokoaung1056/movienest",
  },
  {
    title: "Online Grading System",
    description:
      "A PHP + Bootstrap + MySQL project for managing student grades, results, and admin dashboard features.",
    image: "/src/images/grading-system.png",
    tags: ["PHP", "MySQL", "Bootstrap"],
    category: "web",
  },
  {
    title: "Notezy",
    description:
      "Simple mobile note-taking app with local storage for quick task and note management.",
    image: "/src/images/noteapp.png",
    tags: ["React Native", "AsyncStorage"],
    category: "mobile",
  },
];
