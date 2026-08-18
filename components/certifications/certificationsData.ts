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
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "2026",
    credentialId: "AWS-CP-001",
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    issued: "2026",
    credentialId: "TF-DEV-002",
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Python for Data Science",
    issuer: "IBM",
    issued: "2025",
    credentialId: "IBM-DS-003",
    verifyUrl: "#",
  },
  {
    id: 4,
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    issued: "2025",
    credentialId: "HR-SQL-004",
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "Machine Learning",
    issuer: "Coursera",
    issued: "2025",
    credentialId: "ML-005",
    verifyUrl: "#",
  },
  {
    id: 6,
    title: "Git & GitHub",
    issuer: "Udemy",
    issued: "2025",
    credentialId: "GIT-006",
    verifyUrl: "#",
  },
];