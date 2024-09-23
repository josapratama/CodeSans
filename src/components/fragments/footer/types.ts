import { IconType } from "react-icons"
import { BsTelephone } from "react-icons/bs"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineMailOutline } from "react-icons/md"

interface IFooterOne {
    id: number | string
    title: string
    icon: IconType,
}

export const listFooterOne: IFooterOne[] = [
    {
        id: 1,
        title: "123 Anywhere St., Any City 12345",
        icon: IoLocationOutline
    },
    {
        id: 2,
        title: "123-456-7890",
        icon: BsTelephone
    },
    {
        id: 3,
        title: "hellocallcenter@gmail.com",
        icon: MdOutlineMailOutline
    },
]


interface IFooter {
    id: number | string
    title: string
    url: string
}

export const listFooterTwo: IFooter[] = [
    {
        id: 1,
        title: "About Us",
        url: "/"
    },
    {
        id: 2,
        title: "Departments",
        url: "/"
    },
    {
        id: 3,
        title: "Doctors",
        url: "/"
    },
    {
        id: 4,
        title: "Timetable",
        url: "/"
    },
    {
        id: 5,
        title: "Appointment",
        url: "/"
    },
    {
        id: 6,
        title: "Testimonials",
        url: "/"
    },
]


export const listFooterThree: IFooter[] = [
    {
        id: 1,
        title: "Blog",
        url: "/"
    },
    {
        id: 2,
        title: "Contact Us",
        url: "/"
    },
    {
        id: 3,
        title: "FAQs",
        url: "/"
    },
    {
        id: 4,
        title: "Privacy Policy",
        url: "/"
    },
    {
        id: 5,
        title: "Termns and Conditions",
        url: "/"
    },
]