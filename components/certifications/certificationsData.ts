export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  verifyUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    issued: "May 25, 2026",
    credentialId: " ",
    verifyUrl: "certificate_img\TCS ion uttam.pdf",
  },
  {
    id: 2,
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON / Tata Consultancy Services",
    issued: "December 4–18, 2024",
    credentialId: "119854-27500765-1016",
    verifyUrl: "certificate_img\TCS ion uttam.pdf",
  },
  // {
  //   id: 3,
  //   title: "Python for Data Science",
  //   issuer: "IBM",
  //   issued: "2025",
  //   credentialId: "IBM-DS-003",
  //   verifyUrl: "#",
  // },
  // {
  //   id: 4,
  //   title: "SQL (Advanced)",
  //   issuer: "HackerRank",
  //   issued: "2025",
  //   credentialId: "HR-SQL-004",
  //   verifyUrl: "#",
  // },
  // {
  //   id: 5,
  //   title: "Machine Learning",
  //   issuer: "Coursera",
  //   issued: "2025",
  //   credentialId: "ML-005",
  //   verifyUrl: "#",
  // },
  // {
  //   id: 6,
  //   title: "Git & GitHub",
  //   issuer: "Udemy",
  //   issued: "2025",
  //   credentialId: "GIT-006",
  //   verifyUrl: "#",
  // },
];