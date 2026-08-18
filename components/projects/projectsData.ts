export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mask R-CNN From Scratch",
    description:
      "Complete implementation of Mask R-CNN using TensorFlow and Keras.",
    image: "/projects/project1.jpg",
    tech: ["Python", "TensorFlow", "Keras"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "AI Chatbot",
    description:
      "Conversational AI assistant with LLM integration.",
    image: "/projects/project2.png",
    tech: ["Next.js", "OpenAI", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Student Management System",
    description:
      "Full-stack portal for managing students and faculty.",
    image: "/projects/project3.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Object Detection",
    description:
      "YOLO-based real-time object detection system.",
    image: "/projects/project4.jpg",
    tech: ["Python", "OpenCV", "YOLO"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Modern animated portfolio built with Next.js.",
    image: "/projects/project5.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  // {
  //   id: 6,
  //   title: "Weather Dashboard",
  //   description:
  //     "Real-time weather dashboard using public APIs.",
  //   image: "/projects/project6.jpg",
  //   tech: ["React", "API", "Chart.js"],
  //   github: "#",
  //   demo: "#",
  // },
];