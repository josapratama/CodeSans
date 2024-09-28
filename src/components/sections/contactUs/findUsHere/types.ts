import { IconType } from "react-icons";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

interface ICardFindUsHere {
  id: number | string;
  title: string;
  contact: string;
  icon: IconType
}


export const dataCardFindUsHere: ICardFindUsHere[] = [
    {
        id: 1,
        title: "Phone",
        contact: "123-456-7890",
        icon: BsTelephone
    },
    {
        id: 2,
        title: "Email",
        contact: "hellocallcenter@gmail.com",
        icon: TfiEmail
    },
    {
        id: 3,
        title: "Location",
        contact: "123 Anywhere St. Any City, 12345",
        icon: SlLocationPin
    },
]