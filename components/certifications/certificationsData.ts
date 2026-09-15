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
    verifyUrl: "https://www.linkedin.com/posts/nagargoje-uttam-95b710302_dataanalytics-genai-artificialintelligence-activity-7464897171172057088-9fu0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1ZClcBO4lQNYNlxiAm6PN6-RpjuDe-WuY",
  },
  {
    id: 2,
    title: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON / Tata Consultancy Services",
    issued: "December 4–18, 2024",
    credentialId: "119854-27500765-1016",
    verifyUrl: "https://www.linkedin.com/posts/nagargoje-uttam-95b710302_tcs-tcsion-professionaldevelopment-activity-7397347007121563649-4MGO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1ZClcBO4lQNYNlxiAm6PN6-RpjuDe-WuY",
  },
  {
    id: 3,
    title: "Oracle Certified Foundations Associate — Agentic AI",
    issuer: "Oracle",
    issued: "August 2026",
    credentialId: "330741768AAI26OFA",
    verifyUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7495832722452611072/",
  },
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