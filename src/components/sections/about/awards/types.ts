import { IconsAll } from "../../../../assets/icons"

interface ICardAwards {
    id: number | string
    title: string
    icon: string
}

export const dataCardAwards: ICardAwards[] = [
    {
        id: 1,
        title: "MALCOLM BALDRIGE NATIONAL QUALITY AWARD",
        icon: IconsAll.professional
    },
    {
        id: 2,
        title: "HIMSS DAVIES AWARD",
        icon: IconsAll.professional
    },
    {
        id: 3,
        title: "HEALTHGRADES NATIONAL'S BEST HOSPITAL",
        icon: IconsAll.professional
    },
    {
        id: 4,
        title: "JOINT COMMISSION GOLD SEAL OF APPROVAL",
        icon: IconsAll.professional
    },
]