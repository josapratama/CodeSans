import { IconsAll } from "../../../../assets/icons"

interface ICardDepartments {
    id: number | string
    title: string,
    subtitle: string,
    icon: string
}

export const dataCardDepartmentsOne: ICardDepartments[] = [
    {
        id: 1,
        title: "Emergency",
        subtitle: "Department",
        icon:IconsAll.emergency
    },
    {
        id: 2,
        title: "Pediatric",
        subtitle: "Department",
        icon:IconsAll.pediatric
    },
    {
        id: 3,
        title: "Gynecology",
        subtitle: "Department",
        icon:IconsAll.gynecology
    },
    {
        id: 4,
        title: "Cardiology",
        subtitle: "Department",
        icon:IconsAll.cardiology
    },
    {
        id: 5,
        title: "Neurology",
        subtitle: "Department",
        icon:IconsAll.neurology
    },
]