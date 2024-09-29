import { IconType } from "react-icons"
import { IoLocationOutline } from "react-icons/io5"
import { LiaPhoneSolid } from "react-icons/lia"
import { RiCustomerService2Line } from "react-icons/ri"

interface ICardSupportAndHelp {
    id: number | string
    title: string,
    content: string,
    icon: IconType
}

export const dataCardSupportAndHelp: ICardSupportAndHelp[] = [
    {
        id: 1,
        title: "Hotline",
        content: "123-456-789",
        icon: LiaPhoneSolid,
    },
    {
        id: 2,
        title: "Ambulance",
        content: "876-256-876",
        icon: RiCustomerService2Line
    },
    {
        id: 3,
        title: "Location",
        content: "New York, US",
        icon: IoLocationOutline
    },
]