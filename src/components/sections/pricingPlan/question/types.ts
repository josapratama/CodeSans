interface IQuestions {
  id: number | string;
  quest: string;
  answer: string;
}

export const dataQuestions: IQuestions[] = [
  {
    id: 1,
    quest: "What services does ProHealth offer?",
    answer:
      "ProHealth offers a variety of health services, including Doctor Consultations, Laboratory and Diagnostics, Emergency Services, Women's Health, Children's Health, Rehabilitation and Physical Therapy, Geriatric Services, Surgery and Procedures, Heart Health, and Mental Health Services.",
  },
  {
    id: 2,
    quest: "How do I schedule an appointment with ProHealth?",
    answer:
      "You can schedule an appointment through the ProHealth website, call the hotline, use the patient portal, or visit a location that accepts walk-ins.",
  },
  {
    id: 3,
    quest: "Do you accept insurance?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  {
    id: 4,
    quest: "What should I bring to my appointment?",
    answer:
      "Bring your identity card, insurance card, list of medications you are taking, previous test results or medical records, and payment method.",
  },
  {
    id: 5,
    quest: "How do i request a prescription refill?",
    answer:
      " Anda bisa meminta pengisian ulang resep melalui portal pasien, menghubungi apotek, atau menghubungi dokter secara langsung.",
  },
];
