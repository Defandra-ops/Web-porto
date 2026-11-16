export type CertificationCategory = "language" | "skills";

export interface Certification {
  category: CertificationCategory;
  title: string;
  issuer: string;
  issuedAt: string;
  description?: string;
  descriptionEn?: string;
  descriptionJa?: string;
  credentialId?: string;
  credentialUrl?: string;
  fileUrl?: string;
  image?: {
    src: string;
    alt: string;
    altEn?: string;
    altJa?: string;
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
      altEn: "JLPT N3 preparation class completion certificate for Defandra Rifky Wibowo",
      altJa: "Defandra Rifky WibowoのJLPT N3対策クラス修了証明書",
    },
  },
  {
    category: "language",
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF SET",
    issuedAt: "26 March 2026",
    description:
      "Skor 62/100, setara CEFR C1 Advanced. Reading berada di level B2 Upper Intermediate dan Listening di level C1 Advanced.",
    descriptionEn:
      "Score: 62/100, equivalent to CEFR C1 Advanced. Reading is at B2 Upper Intermediate and Listening is at C1 Advanced.",
    descriptionJa:
      "スコア62/100、CEFR C1 Advanced相当。リーディングはB2 Upper Intermediate、リスニングはC1 Advancedレベルです。",
    credentialUrl: "https://cert.efset.org/sE1J9M",
    fileUrl: "/certifications/ef-set-english-certificate.pdf",
    image: {
      src: "/images/certifications/ef-set-english-certificate.png",
      alt: "EF SET English Certificate Defandra Rifky Wibowo, skor 62 dari 100 dan level C1 Advanced",
      altEn: "EF SET English Certificate for Defandra Rifky Wibowo, score 62/100, C1 Advanced",
      altJa: "Defandra Rifky WibowoのEF SET英語証明書、スコア62/100、C1 Advanced",
    },
  },
  {
    category: "skills",
    title: "Python Dasar",
    issuer: "Skilvul",
    issuedAt: "11 January 2026",
    description: "Certificate of Completion untuk kelas Python Dasar.",
    descriptionEn: "Certificate of Completion for the Python Basics course.",
    descriptionJa: "Python基礎コースの修了証明書。",
    credentialUrl: "https://skilvul.com/courses/python-dasar/student/cmh0llp9h00be01plf92ydvsi/",
    fileUrl: "/certifications/skilvul-python-dasar.pdf",
    image: {
      src: "/images/certifications/skilvul-python-dasar.png",
      alt: "Sertifikat penyelesaian kelas Python Dasar atas nama Defandra Rifky",
      altEn: "Python Basics course completion certificate for Defandra Rifky",
      altJa: "Defandra RifkyのPython基礎コース修了証明書",
    },
  },
  {
    category: "skills",
    title: "React Native",
    issuer: "Skilvul",
    issuedAt: "03 November 2025",
    description: "Certificate of Completion untuk kelas React Native.",
    descriptionEn: "Certificate of Completion for the React Native course.",
    descriptionJa: "React Nativeコースの修了証明書。",
    credentialUrl: "https://skilvul.com/courses/react-native-dasar/student/cmh0llp9h00be01plf92ydvsi/",
    fileUrl: "/certifications/skilvul-react-native.pdf",
    image: {
      src: "/images/certifications/skilvul-react-native.png",
      alt: "Sertifikat penyelesaian kelas React Native atas nama Defandra Rifky",
      altEn: "React Native course completion certificate for Defandra Rifky",
      altJa: "Defandra RifkyのReact Nativeコース修了証明書",
    },
  },
  {
    category: "skills",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia · Coding Camp powered by DBS Foundation 2026",
    issuedAt: "03 November 2025",
    description:
      "Sertifikat kelulusan kelas literasi finansial, berlaku hingga 03 November 2028.",
    descriptionEn:
      "Certificate of completion for a financial literacy course, valid through 03 November 2028.",
    descriptionJa:
      "金融リテラシーコースの修了証明書。有効期限は2028年11月3日です。",
    credentialId: "1RXYQWDDQZVM",
    credentialUrl: "https://www.dicoding.com/certificates/1RXYQWDDQZVM",
    fileUrl: "/certifications/dicoding-financial-literacy.pdf",
    image: {
      src: "/images/certifications/dicoding-financial-literacy.png",
      alt: "Sertifikat Dicoding Introduction to Financial Literacy atas nama Defandra Rifky Wibowo",
      altEn: "Dicoding Introduction to Financial Literacy certificate for Defandra Rifky Wibowo",
      altJa: "Defandra Rifky WibowoのDicoding金融リテラシー入門修了証明書",
    },
  },
];
