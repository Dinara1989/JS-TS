export type LocalCityType = {
    title: string
    countryTitle: string
}
export type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechType[]
}
export const student: StudentType = {
    id: 1,
    name: "Dinara",
    age: 35,
    isActive: true,
    address: {
        streetTitle: "Abdul Nesser",
        city: {
            title: "Bangui",
            countryTitle: "CAR"
        }
    },
    //масив обʼєктів
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
console.log(student.age)
console.log(student.name)
console.log(student.technologies[2].title)