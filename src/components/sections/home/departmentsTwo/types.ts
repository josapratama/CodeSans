import { IconsAll } from "../../../../assets/icons";

interface ICardDepartments {
  id: number | string;
  title: string;
  description: string;
  icon: string;
}

export const dataCardDepartmentsTwo: ICardDepartments[] = [
  {
    id: 1,
    title: "Malcomlm Baldrige National Quality Award",
    description:
      "This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
    icon: IconsAll.award,
  },
  {
    id: 2,
    title: "HIMSS Davies Award",
    description:
      "This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
    icon: IconsAll.award,
  },
  {
    id: 3,
    title: "Healthgrades National's Best Hospital",
    description:
      "This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
    icon: IconsAll.award,
  },
  {
    id: 4,
    title: "Joint Commission Gold Seal of Approval",
    description:
      "This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.",
    icon: IconsAll.award,
  },
];
