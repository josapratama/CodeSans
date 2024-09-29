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
        title: "Find Doctor",
        url: "/doctor",
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 5,
        title: "Pages",
        url: "/pages",
        isMenu: true
    },
    {
        id: 6,
        title: "Contact",
        url: "/contact",
    },
]