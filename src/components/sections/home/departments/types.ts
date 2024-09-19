import { IconsAll } from "../../../../assets/icons"

interface ICardDepartments {
    id: number | string
    title: string,
    subtitle: string,
    icon: string
}

export const dataCardDepartments: ICardDepartments[] = [
    {
        id: 1,
        title: "Emergency",
        subtitle: "Department",
        icon:IconsAll.emergency
    },
]