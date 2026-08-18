export interface SkillCategory {
  id: number;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 2,
    title: "Backend",
    description: "Developing scalable server-side applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
    ],
  },
  {
    id: 3,
    title: "Databases",
    description: "Managing structured and unstructured data.",
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Building intelligent computer vision and deep learning solutions.",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Scikit-learn",
      "Pandas",
    ],
  },
  {
    id: 5,
    title: "Tools & Platforms",
    description: "Development workflow and deployment ecosystem.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Docker",
      "n8n",
    ],
  },
];