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
    image: "Taskhub.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Shadcn UI"],
    category: "web",
    githubUrl: "https://github.com/chitkokoaung1056/taskhub",
    demoUrl: "https://taskhub-ashy.vercel.app/",
  },
  {
    title: "MovieNest",
    description:
      "Modern movie discovery UI built with Next.js featuring search, trending section, pagination, and responsive design.",
    image: "MovieNest.png",
    tags: ["Next.js", "React", "Tailwind", "Shadcn UI"],
    category: "web",
    githubUrl: "https://github.com/chitkokoaung1056/movienest",
    demoUrl: "https://movie-nest-beige.vercel.app/",
  },
  {
    title: "Online Grading System",
    description:
      "A Laravel + Bootstrap + MySQL project for managing student grades, results, and admin dashboard features.",
    image: "/src/images/grading-system.png",
    tags: ["PHP", "Laravel", "Bootstrap"],
    category: "web",
  },
  {
    title: "NoxWeather",
    description:
      "Weather app built with React Native & Expo. Features real-time weather, forecasts, UV index, and sunrise/sunset tracking.",
    image: "/NoxWeather.png",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "OpenWeather API",
      "NativeWind",
    ],
    category: "mobile",
    githubUrl: "https://github.com/chitkokoaung1056/NoxWeather",
  },
  {
    title: "Notezy",
    description:
      "Simple mobile note-taking app with local storage for quick task and note management.",
    image: "Notezy.png",
    tags: ["React Native", "AsyncStorage"],
    category: "mobile",
    
    githubUrl: "https://github.com/chitkokoaung1056/notezy",
  },
];
