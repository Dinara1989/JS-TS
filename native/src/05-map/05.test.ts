import {createGreetingMessage, ManType} from "./05";


let people: Array<ManType> = []
beforeEach( ()=> {
    people = [
        {name: 'Dinara Hasparian', age: 35},
        {name: 'Hro Chan', age: 43},
        {name: 'Rocky African', age: 3}
    ]
})
test('should get array of greeting messages', ()=> {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Dinara! Welcome to IT!")
})