import {CityType} from "../02objects/02_02";
import {addMoney, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
let city: CityType;
beforeEach(()=> {
    city = {
        title: "New York",
        houses: [
            {builtAt: 2012, repaired: false, address: {
                    number: 100, street:
                        {title: 'White street'}
                }},
            {builtAt: 2008, repaired: false, address: {
                    number: 100, street:
                        {title: 'Happy street'}
                }},
            {builtAt: 2020, repaired: false, address: {
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


test('Budget should be changed for HOSPITAL', () => {
    addMoney(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
})
test('Budget should be changed for FIRE-STATION', () => {
    addMoney(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
})
test('House should be repaired', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy() //ще один варіант написати true
})
test('Staff should be decreased', () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180);
})

test('Staff should be increased', () => {
    // const message= createMessage(city); Можна не створювати окремо змінну, а написати її в експекті
    toHireStaff(city.governmentBuildings[0], 20);
    //функції можна перевикористовувати
    toHireStaff(city.governmentBuildings[1], 100);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(1100);
    expect(createMessage(city)).toBe("Hello New York citizens. I want you to be happy. All 100000 people.")
})