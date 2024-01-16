import {CityType} from "./02_02";
import {demolishHousesOnTheStreet, getGraterCount} from "../04-filter/04_2";
import {createMessages, getStreetsTitles, getStreetsTitlesGov} from "../05-map/05";
import {createMessage} from "../03functions/03";

let city: CityType;
beforeEach(()=> {
    city = {
        title: "New York",
        houses: [
            {id: 1, builtAt: 2012, repaired: false, address: {
                number: 100, street:
                        {title: 'White street'}
                }},
            { id: 2, builtAt: 2008, repaired: false, address: {
                    number: 100, street:
                        {title: 'Happy street'}
                }},
            {id: 3, builtAt: 2020, repaired: false, address: {
                    number: 200, street:
                        {title: 'Hogwarts street'}
                }},
        ],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 200000, staffCount: 200, address:
                    {street:
                            {title: "Central Str"}
                    }
            },
            {type: "FIRE-STATION", budget: 500000, staffCount: 1000, address:
                    {street:
                            {title: "Souths park str"}
                    }
            }
        ],
        citizensNumber:100000
    }
})
test("city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].builtAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].builtAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].builtAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(200);
    expect(city.houses[2].address.street.title).toBe("Hogwarts street");
})

test("city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str")

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION")
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe("Souths park str")
})

//тести на filter
test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(1);
})

test("buildings with correct staff count", () => {
    let buildings = getGraterCount(city.governmentBuildings, 500)
    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
})

//тести на map
test("list of streets titles of gov buildings", () => {
    let streets = getStreetsTitlesGov(city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central Str");
    expect(streets[1]).toBe("Souths park str");
})

test("list of streets titles", () => {
    let streets = getStreetsTitles(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
})

test("create greeting messages for streets", () => {
    let electionMessages = createMessages(city.houses);

    expect(electionMessages.length).toBe(3);
    expect(electionMessages[0]).toBe("Hello guys from White street");
    expect(electionMessages[1]).toBe("Hello guys from Happy street");
})