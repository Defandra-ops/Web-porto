export type CertificationCategory = "language" | "skills";

export interface Certification {
  category: CertificationCategory;
  title: string;
  issuer: string;
  issuedAt: string;
  description?: string;
  credentialId?: string;
  credentialUrl?: string;
  fileUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export const certifications: Certification[] = [
  {
    category: "language",
    title: "JLPT N3 Preparation Class — Certificate of Completion",
    issuer: "Edulabo by KapanJepan (Career Diversity Inc.)",
    issuedAt: "20 July 2026",
    fileUrl: "/certifications/jlpt-n3-preparation-completion.pdf",
    image: {
      src: "/images/certifications/jlpt-n3-preparation-completion.png",
      alt: "Sertifikat penyelesaian kelas persiapan JLPT N3 atas nama Defandra Rifky Wibowo",
    },
  },
  {
    category: "language",
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF SET",
    issuedAt: "26 March 2026",
    description:
      "Skor 62/100, setara CEFR C1 Advanced. Reading berada di level B2 Upper Intermediate dan Listening di level C1 Advanced.",
    credentialUrl: "https://cert.efset.org/sE1J9M",
    fileUrl: "/certifications/ef-set-english-certificate.pdf",
    image: {
      src: "/images/certifications/ef-set-english-certificate.png",
      alt: "EF SET English Certificate Defandra Rifky Wibowo, skor 62 dari 100 dan level C1 Advanced",
    },
  },
  {
    category: "skills",
    title: "Python Dasar",
    issuer: "Skilvul",
    issuedAt: "11 January 2026",
    description: "Certificate of Completion untuk kelas Python Dasar.",
    credentialUrl: "https://skilvul.com/courses/python-dasar/student/cmh0llp9h00be01plf92ydvsi/",
    fileUrl: "/certifications/skilvul-python-dasar.pdf",
    image: {
      src: "/images/certifications/skilvul-python-dasar.png",
      alt: "Sertifikat penyelesaian kelas Python Dasar atas nama Defandra Rifky",
    },
  },
  {
    category: "skills",
    title: "React Native",
    issuer: "Skilvul",
    issuedAt: "03 November 2025",
    description: "Certificate of Completion untuk kelas React Native.",
    credentialUrl: "https://skilvul.com/courses/react-native-dasar/student/cmh0llp9h00be01plf92ydvsi/",
    fileUrl: "/certifications/skilvul-react-native.pdf",
    image: {
      src: "/images/certifications/skilvul-react-native.png",
      alt: "Sertifikat penyelesaian kelas React Native atas nama Defandra Rifky",
    },
  },
  {
    category: "skills",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia · Coding Camp powered by DBS Foundation 2026",
    issuedAt: "03 November 2025",
    description:
      "Sertifikat kelulusan kelas literasi finansial, berlaku hingga 03 November 2028.",
    credentialId: "1RXYQWDDQZVM",
    credentialUrl: "https://www.dicoding.com/certificates/1RXYQWDDQZVM",
    fileUrl: "/certifications/dicoding-financial-literacy.pdf",
    image: {
      src: "/images/certifications/dicoding-financial-literacy.png",
      alt: "Sertifikat Dicoding Introduction to Financial Literacy atas nama Defandra Rifky Wibowo",
    },
  },
];
