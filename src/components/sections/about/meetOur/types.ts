import { ImageAboutMeetOur } from "../../../../assets/images/about/Index";

interface ICardMeetOur {
  id: number | string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const dataCardMeetOur: ICardMeetOur[] = [
  {
    id: 1,
    name: "Dr.James Lee, MD",
    role: "Head of Cardiologist",
    description:
      "With expertise in managing complex heart conditions and performing advanced cardiac procedures",
    image: ImageAboutMeetOur.jamesLe,
  },
  {
    id: 2,
    name: "Dr.Jhon Smith, MD",
    role: "Emergency Medicine  Physician",
    description:
      "With expertise in treating acute illnesses and injuries in medicine physician",
    image: ImageAboutMeetOur.jhonSmith,
  },
  {
    id: 3,
    name: "Dr.Susan Bones, MD",
    role: "Board-certified Pediatrician",
    description:
      "With experience in managing complex medical conditions in children",
    image: ImageAboutMeetOur.susanBones,
  },
];
