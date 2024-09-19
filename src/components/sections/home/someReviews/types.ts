import { ImageHomeSomeReviews } from "../../../../assets/images/home"

interface ICardSomeReviews {
    id: number | string
    name: string
    origin: string
    avatar: string
}


export const dataCardSomeReviews: ICardSomeReviews[] = [
    {
        id: 1,
        name: "PAULO HUBERT",
        origin: "New York, USA",
        avatar: ImageHomeSomeReviews.pauloHubert
    },
    {
        id: 2,
        name: "LAURENCE VENDETA",
        origin: "California, USA",
        avatar: ImageHomeSomeReviews.laurenceVendeta
    },
    {
        id: 3,
        name: "CASSANDRA RAUL",
        origin: "Florida, USA",
        avatar: ImageHomeSomeReviews.cassandraRaul
    },
]