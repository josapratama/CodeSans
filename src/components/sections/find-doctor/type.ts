import DoctorImages from "../../../assets/images/findDoctor";

export type Doctor = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  degrees: string[];
  experiences: string[];
};

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Alice Johnson",
    role: "Emergency Medicine Physician",
    description:
      "A highly experienced cardiologist specializing in heart diseases.",
    image: DoctorImages.lisa,
    contactInfo: {
      phone: "123-456-7890",
      email: "alice.johnson@hospital.com",
    },
    degrees: [
      "Doctor of Medicine, Cardiology Spec",
      "Master in Cardiovascular Science",
      "Bachelor of Medical Science",
    ],
    experiences: [
      "Head of Cardiology Department at",
      "Senior Cardiologist at HeartCare C",
      "Researcher in Cardiovascular Disea",
    ],
  },
  {
    id: 2,
    name: "Dr. Benjamin Smith",
    role: "Emergency Medicine Physician",
    description: "Expert in neurological disorders and brain health.",
    image: DoctorImages.abdul,
    contactInfo: {
      phone: "987-654-3210",
      email: "ben.smith@neuroclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Neurology Spec",
      "Master in Neurological Sciences",
      "Bachelor of Biomedical Science",
    ],
    experiences: [
      "Chief Neurologist at NeuroCare Hos",
      "Consultant Neurologist for BrainWe",
      "Lead Researcher on Brain Disorders",
    ],
  },
  {
    id: 3,
    name: "Dr. Catherine Davis",
    role: "Emergency Medicine Physician",
    description:
      "Skilled dermatologist focusing on skin health and treatments.",
    image: DoctorImages.karen,
    contactInfo: {
      phone: "456-789-1230",
      email: "catherine.davis@skinhealth.com",
    },
    degrees: [
      "Doctor of Medicine, Dermatology Sp",
      "Master in Skin Diseases and Treatm",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Head of Dermatology Department at",
      "Senior Dermatologist at SkinCare C",
      "Researcher on Skin Cancer Treatmen",
    ],
  },
  {
    id: 4,
    name: "Dr. Daniel Brown",
    role: "Pediatric Department",
    description:
      "Experienced surgeon specializing in bone and joint surgeries.",
    image: DoctorImages.david,
    contactInfo: {
      phone: "321-654-9870",
      email: "daniel.brown@orthohospital.com",
    },
    degrees: [
      "Doctor of Medicine, Orthopedic Spe",
      "Master in Orthopedic Surgery",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Head of Orthopedic Surgery at Heal",
      "Consultant Orthopedic Surgeon for",
      "Researcher in Joint Replacement Pro",
    ],
  },
  {
    id: 5,
    name: "Dr. Evelyn Green",
    role: "Pediatric Department",
    description: "Specialist in children's health and pediatric care.",
    image: DoctorImages.david,
    contactInfo: {
      phone: "654-987-3210",
      email: "evelyn.green@pediatrics.com",
    },
    degrees: [
      "Doctor of Medicine, Pediatric Spec",
      "Master in Child Health and Care",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Pediatrician at Children's Ho",
      "Senior Pediatric Consultant at KidC",
      "Researcher on Childhood Diseases a",
    ],
  },
  {
    id: 6,
    name: "Dr. Frank Harris",
    role: "Emergency Medicine Physician",
    description: "Leading oncologist with expertise in cancer treatment.",
    image: DoctorImages.jhon,
    contactInfo: {
      phone: "789-123-4567",
      email: "frank.harris@cancerclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Oncology Spec",
      "Master in Cancer Studies",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Head Oncologist at CancerCare Hosp",
      "Consultant Oncologist at LifeHope C",
      "Researcher in Advanced Cancer Trea",
    ],
  },
  {
    id: 7,
    name: "Dr. Grace Williams",
    role: "Emergency Medicine Physician",
    description:
      "Specialist in women's health, focusing on pregnancy and childbirth.",
    image: DoctorImages.michelle,
    contactInfo: {
      phone: "987-321-6540",
      email: "grace.williams@womensclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Gynecology Spec",
      "Master in Women's Health",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Senior Gynecologist at WomenCare H",
      "Lead Gynecologist at LifeHope Medi",
      "Researcher on Reproductive Health",
    ],
  },
  {
    id: 8,
    name: "Dr. Henry White",
    role: "Pediatric Department",
    description:
      "Expert in eye care and vision health, with over 20 years of experience.",
    image: DoctorImages.susan,
    contactInfo: {
      phone: "123-654-7890",
      email: "henry.white@visionclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Ophthalmology",
      "Master in Vision Science",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Ophthalmologist at VisionCare",
      "Consultant Ophthalmologist at Life",
      "Researcher on Vision Correction Te",
    ],
  },
  {
    id: 9,
    name: "Dr. Ivy Martinez",
    role: "Psychiatry Department",
    description:
      "A dedicated psychiatrist focusing on mental health disorders.",
    image: DoctorImages.maria,
    contactInfo: {
      phone: "789-654-1230",
      email: "ivy.martinez@mentalhealth.com",
    },
    degrees: [
      "Doctor of Medicine, Psychiatry Spe",
      "Master in Mental Health",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Head of Psychiatry at MentalHealth",
      "Senior Consultant Psychiatrist at",
      "Researcher on Mental Health Disord",
    ],
  },
  {
    id: 10,
    name: "Dr. Jack Thompson",
    role: "Emergency Medicine Physician",
    description:
      "Specialist in diagnostic imaging techniques, including X-rays and MRIs.",
    image: DoctorImages.michael,
    contactInfo: {
      phone: "654-321-9870",
      email: "jack.thompson@radiologyclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Radiology Spec",
      "Master in Diagnostic Imaging",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Radiologist at ImagingCare",
      "Senior Radiologist at LifeHope Rad",
      "Researcher on Advanced Imaging Tec",
    ],
  },
  {
    id: 11,
    name: "Dr. Karen Lewis",
    role: "Psychiatry Department",
    description:
      "Experienced in administering anesthesia for surgeries and pain management.",
    image: DoctorImages.sarahlee,
    contactInfo: {
      phone: "123-987-4560",
      email: "karen.lewis@anesthesia.com",
    },
    degrees: [
      "Doctor of Medicine, Anesthesia Spe",
      "Master in Pain Management",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Anesthesiologist at LifeCare",
      "Senior Anesthesiologist at Healing",
      "Researcher on Pain Management Tech",
    ],
  },
  {
    id: 12,
    name: "Dr. Liam Scott",
    role: "Emergency Medicine Physician",
    description:
      "Expert in hormone-related diseases such as diabetes and thyroid disorders.",
    image: DoctorImages.michelle,
    contactInfo: {
      phone: "321-987-6540",
      email: "liam.scott@endocrinecare.com",
    },
    degrees: [
      "Doctor of Medicine, Endocrinology",
      "Master in Hormonal Disorders",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Senior Endocrinologist at LifeHope",
      "Consultant Endocrinologist at Heal",
      "Researcher on Hormone Imbalance Tr",
    ],
  },
  {
    id: 13,
    name: "Dr. Mia Robinson",
    role: "Psychiatry Department",
    description:
      "Specialist in lung and respiratory diseases, with extensive experience.",
    image: DoctorImages.davidloid,
    contactInfo: {
      phone: "987-123-6540",
      email: "mia.robinson@lungclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Pulmonology Sp",
      "Master in Respiratory Health",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Pulmonologist at LungCare Ho",
      "Consultant Pulmonologist at LifeHo",
      "Researcher on Chronic Respiratory",
    ],
  },
  {
    id: 14,
    name: "Dr. Noah Carter",
    role: "Gastroenterologist",
    description: "Experienced gastroenterologist focusing on digestive health.",
    image: DoctorImages.sarah,
    contactInfo: {
      phone: "123-789-6540",
      email: "noah.carter@digestiveclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Gastroenterolo",
      "Master in Digestive Health",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Gastroenterologist at Digest",
      "Senior Consultant at LifeHope Gast",
      "Researcher on Digestive Diseases",
    ],
  },
  {
    id: 15,
    name: "Dr. Olivia Adams",
    role: "Emergency Medicine Physician",
    description:
      "Expert in the immune system, focusing on allergies and autoimmune diseases.",
    image: DoctorImages.jhon,
    contactInfo: {
      phone: "654-123-7890",
      email: "olivia.adams@immunology.com",
    },
    degrees: [
      "Doctor of Medicine, Immunology Spe",
      "Master in Immune System Disorders",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Immunologist at ImmuneCare H",
      "Consultant Immunologist at LifeHop",
      "Researcher on Immune System Functi",
    ],
  },
  {
    id: 16,
    name: "Dr. Patrick James",
    role: "Psychiatry Department",
    description:
      "Leading nephrologist specializing in kidney diseases and treatments.",
    image: DoctorImages.davidloid,
    contactInfo: {
      phone: "321-123-9870",
      email: "patrick.james@kidneyclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Nephrology Spe",
      "Master in Kidney Health",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Nephrologist at KidneyCare H",
      "Consultant Nephrologist at LifeHop",
      "Researcher on Kidney Disease Treat",
    ],
  },
  {
    id: 17,
    name: "Dr. Quentin Bell",
    role: "Psychiatry Department",
    description:
      "Specialist in arthritis and autoimmune disorders affecting joints.",
    image: DoctorImages.maria,
    contactInfo: {
      phone: "987-321-1230",
      email: "quentin.bell@jointclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Rheumatology S",
      "Master in Joint Health",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Senior Rheumatologist at JointCare",
      "Consultant Rheumatologist at LifeH",
      "Researcher on Autoimmune Diseases",
    ],
  },
  {
    id: 18,
    name: "Dr. Rachel Clark",
    role: "Pediatric Department",
    description: "Specialist in blood diseases, including anemia and leukemia.",
    image: DoctorImages.susan,
    contactInfo: {
      phone: "123-456-3210",
      email: "rachel.clark@bloodclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Hematology Spe",
      "Master in Blood Disorders",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Hematologist at BloodCare Ho",
      "Consultant Hematologist at LifeHop",
      "Researcher on Blood Cancer Treatm",
    ],
  },
  {
    id: 19,
    name: "Dr. Samuel Edwards",
    role: "Emergency Medicine Physician",
    description:
      "Expert in urinary tract and male reproductive system diseases.",
    image: DoctorImages.michelle,
    contactInfo: {
      phone: "321-654-1230",
      email: "samuel.edwards@uroclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Urology Specia",
      "Master in Urinary Health",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Chief Urologist at UrinaryCare Hos",
      "Consultant Urologist at LifeHope U",
      "Researcher on Male Reproductive Sy",
    ],
  },
  {
    id: 20,
    name: "Dr. Tina Walker",
    role: "Emergency Medicine Physician",
    description:
      "Specialist in treating allergic reactions and immune responses.",
    image: DoctorImages.michael,
    contactInfo: {
      phone: "987-654-7890",
      email: "tina.walker@allergyclinic.com",
    },
    degrees: [
      "Doctor of Medicine, Allergy Specia",
      "Master in Allergy and Immune Disor",
      "Bachelor of Medical Sciences",
    ],
    experiences: [
      "Senior Allergist at AllergyCare Ho",
      "Consultant Allergist at LifeHope A",
      "Researcher on Allergic Reaction Tr",
    ],
  },
];
