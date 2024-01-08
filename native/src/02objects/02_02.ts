export type StreetType = {
    title: string
}
export type AddressType = {
    //? показує, що цей пункт необовʼязковий
    number?: number
    street: StreetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovBuildType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovBuildType[]
    citizensNumber: number
}
