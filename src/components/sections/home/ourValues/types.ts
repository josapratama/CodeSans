import { IconsAll } from "../../../../assets/icons";

interface ICardOurValues {
  id: number | string;
  title: string;
  description: string;
  icon: string;
}

export const dataCardOurValues: ICardOurValues[] = [
  {
    id: 1,
    title: "Compassion",
    description:
      "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.",
    icon: IconsAll.compassion,
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.",
    icon: IconsAll.excellence,
  },
  {
    id: 3,
    title: "Integrity",
    description:
      "We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.",
    icon: IconsAll.integrity,
  },
  {
    id: 4,
    title: "Respect",
    description:
      "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.",
    icon: IconsAll.compassion,
  },
  {
    id: 5,
    title: "Teamwork",
    description:
      "We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.",
    icon: IconsAll.compassion,
  },
];
