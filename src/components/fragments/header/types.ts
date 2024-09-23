interface INavbar {
    id: number | string
    title: string
    url: string
    isMenu?: boolean
}


export const dataNavbar: INavbar[] = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "find-doctor",
        url: "/find-doctor",
    },
    {
        id: 4,
        title: "blog",
        url: "/blog",
    },
    {
        id: 5,
        title: "pages",
        url: "/pages",
        isMenu: true
    },
    {
        id: 6,
        title: "contact",
        url: "/contact",
    },
]