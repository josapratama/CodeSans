import { IconsAll } from "../../../../assets/icons";

interface ICardWhyChooseUs {
  id: number | string;
  title: string;
  description: string;
  icon: string;
}

export const dataCardWhyChooseUs: ICardWhyChooseUs[] = [
  {
    id: 1,
    title: "Experienced Medical Professionals",
    description:
      "Our team includes experience doctors, nurses and other healthcare professionals who are dedicated to providing the best possible care to our patients",
    icon: IconsAll.professional,
  },
  {
    id: 2,
    title: "Comprehensive Services",
    description:
      "We offer a wide range of healthcare services, from preventive care to specialized treatment for complex conditions.",
    icon: IconsAll.comprehensive,
  },
  {
    id: 3,
    title: "Patient-centered Approach",
    description:
      "We believe in treating each patient as an individual, and we take the time to understand your unique health needs and concerns.",
    icon: IconsAll.patient,
  },
  {
    id: 4,
    title: "State-of-the-art Facilities",
    description:
      "Our healthcare center is equipped with the latest technology and equipment to provide our patients with the most advanced care possible.",
    icon: IconsAll.facilities,
  },
];
