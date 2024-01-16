import {CityType, GovBuildType} from "../02objects/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter( h => h.address.street.title !== street )
}

export const getGraterCount = (buildings: Array<GovBuildType>, number: number) => {
    return buildings.filter( b => b.staffCount > number);
}