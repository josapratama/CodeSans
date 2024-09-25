import { IconType } from "react-icons"
import { HiOutlineCalendarDays } from "react-icons/hi2"

interface ICardAbout {
    id: number | string
    title: string
    description: string
    url: string
    icon: IconType
}

export const dataCardAbout: ICardAbout[] = [
    {
        id: 1,
        title: "Diagnostic testing",
        description: "Blood tests, imaging studies, and other tests to diagnose health conditions",
        url: "/about",
        icon: HiOutlineCalendarDays
    },
    {
        id: 2,
        title: "Rehabilitation services",
        description: "Physical therapy, occupational therapy, and other services to help patients recover from injuries",
        url: "/about",
        icon: HiOutlineCalendarDays
    },
    {
        id: 3,
        title: "Preventive care",
        description: "Annual checkups, immunizations, and health screenings care preventive",
        url: "/about",
        icon: HiOutlineCalendarDays
    },
    {
        id: 4,
        title: "Treatment for acute and chronic conditions",
        description: "Medication management, disease management, and other treatments to improve health outcomes",
        url: "/about",
        icon: HiOutlineCalendarDays
    },
    {
        id: 5,
        title: "Mental health services",
        description: "Counseling, therapy, and other services to help patients manage mental health conditions",
        url: "/about",
        icon: HiOutlineCalendarDays
    },
]