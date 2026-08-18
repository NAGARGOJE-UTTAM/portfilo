export interface Achievement {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  link: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Solving Coding Problems",
    category: "Coding",
    year: "2026",
    description:
      "Solved algorithmic and data structure problems across multiple coding platforms.",
    link: "https://leetcode.com/u/NAGARGOJEUTTAM/",
  },
  {
    id: 2,
    title: "Built Mask R-CNN From Scratch",
    category: "AI / Machine Learning",
    year: "2026",
    description:
      "Implemented the complete Mask R-CNN architecture using TensorFlow and Keras.",
    link: "https://github.com/NAGARGOJE-UTTAM/mask-RCNN-from-scratch",
  },
  // {
  //   id: 3,
  //   title: "Open Source Contributions",
  //   category: "Open Source",
  //   year: "2026",
  //   description:
  //     "Contributed improvements and bug fixes to open-source projects on GitHub.",
  //   link: "#",
  // },
  {
    id: 4,
    title: "Hackathon ",
    category: "Competition",
    year: "2025",
    description:
      "Reached the final round of  software development hackathon.",
    link: "#",
  },
  // {
  //   id: 5,
  //   title: "Academic Excellence",
  //   category: "Education",
  //   year: "2025",
  //   description:
  //     "Maintained consistent academic performance while building real-world software projects.",
  //   link: "#",
  // },
  {
    id: 6,
    title: "Portfolio & Full Stack Projects",
    category: "Development",
    year: "2026",
    description:
      "Developed multiple AI and full-stack applications using modern web technologies.",
    link: "#",
  },
];
