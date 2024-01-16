import {GovBuildType, HousesType} from "../02objects/02_02";

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Dinara Hasparian', age: 35},
    {name: 'Hro Chan', age: 43},
    {name: 'Rocky African', age: 3}
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}
const dev2 = people.map(dimychTransformator)

//Або можна функцію одразу закинути в map
const dev3 = people.map( man => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
})

const messages = people.map( man => `Hello ${man.name.split("")[0]}! Welcome to IT!`)
export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map( man => `Hello ${man.name.split(" ")[0]}! Welcome to IT!`)
}
// const devs = [
//     {
//         stack: ['css, html', 'js', 'tdd', 'react'],
//         firstName: "Dinara", lastName: "Hasparian"
//     },
//     {
//         stack: ['css, html', 'js', 'tdd', 'react'],
//         firstName: "Hro", lastName: "Chan"
//     },
//     {
//         stack: ['css, html', 'js', 'tdd', 'react'],
//         firstName: "Rocky", lastName: "African"
//     },
// ]

export const getStreetsTitlesGov = (buildings: Array<GovBuildType>) => {
    return buildings.map( b => b.address.street.title)
}

export const getStreetsTitles = (houses: Array<HousesType>) => {
    return houses.map( h => h.address.street.title)
}


export const createMessages = (houses: Array<HousesType>) => {
    return houses.map( h => `Hello guys from ${h.address.street.title}`)
}