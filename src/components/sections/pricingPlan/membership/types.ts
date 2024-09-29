interface ICardMembership {
  id: number | string;
  title: string;
  description: string;
  price: string;
  service: string[];
  isPopular?: boolean;
}

// ['Whole Family Coverage', "Reduced Vaccination Costs", "24/7 Medical Advice"]

export const dataCardMembership: ICardMembership[] = [
  {
    id: 1,
    title: "Family Health Plan",
    description:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.",
    price: "249",
    service: [
      "Whole Family Coverage",
      "Reduced Vaccination Costs",
      "24/7 Medical Advice",
    ],
  },
  {
    id: 2,
    title: "Wellness Plan",
    description:
      "Comprehensive healthcare tailored to your needs. Experience unlimited care and exclusive access to wellness events.",
    price: "99",
    service: [
      "Unlimited Check-ups",
      "Discounts on Treatments",
      "Annual Health Assessment",
      "Priority Scheduling",
      "Wellness Workshops",
    ],
    isPopular: true,
  },
  {
    id: 3,
    title: "Senior Wellness Plan",
    description:
      "Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years ",
    price: "149",
    service: [
      "Senior-Specific Care",
      "Geriatric Assessments",
      "Fall Prevention Programs",
      "Medication Discounts",
    ],
  },
  {
    id: 4,
    title: "Dental Health Plan",
    description:
      "Smile with confidence. Enjoy regular dental check-ups, emergency coverage, and exclusive discounts on dental procedures.",
    price: "79",
    service: [
      "Dental Check-ups",
      "Procedure Discounts",
      "Emergency Coverage",
      "Oral Health Advice",
    ],
  },
  {
    id: 5,
    title: "Women's Health Plan",
    description:
      "Comprehensive women's health services. Receive expert gynecological care, family planning support, and prenatal/postnatal.",
    price: "169",
    service: [
      "Women's Health Services",
      "Gynecological",
      "Fall Prevention Programs",
      "Family Planning",
      "Prenatal & Postnatal Support",
    ],
  },
  {
    id: 6,
    title: "Sports & Fitness Plan",
    description:
      "Optimized for athletes. Access sports injury assessments, physiotherapy, and expert advice for peak performance and recovery.",
    price: "119",
    service: [
      "Sports Injury Assessments",
      "Physioteraphy Sessions",
      "Sports Medicine Experts",
      "Fitness Support",
    ],
  },
];
