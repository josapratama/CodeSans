import { ImageHomeLatestUpdate } from "../../../../assets/images/home";

interface ICardLatestUpdate {
  id: number | string;
  title: string;
  date: string;
  url: string;
  image: string;
}

export const dataCardLatestUpdate: ICardLatestUpdate[] = [
  {
    id: 1,
    title: "The Benefits of Mindfulness Meditations for Stress and Axienty",
    date: "May 1, 2023",
    url: "",
    image: ImageHomeLatestUpdate.theBenefitOfMindFulnes,
  },
  {
    id: 2,
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    date: "May 1, 2023",
    url: "",
    image: ImageHomeLatestUpdate.theImportance,
  },
  {
    id: 3,
    title: "Healthy Eating on a Budget: Tips and Strategies",
    date: "May 4, 2023",
    url: "",
    image: ImageHomeLatestUpdate.healthyEating,
  },
];
