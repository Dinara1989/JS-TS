import {mult, splitIntoWords, sum} from "./01";

//Щоб кожен раз не прописувати значення, їх виносимо окремо
let a: number;
let b: number;
let c: number;

//цю кол-бек функцію пишемо для того, щоб жоден з тестів не переприсвоїв значення для змінних
beforeEach( ()  => {
    a = 1;
    b = 2;
    c = 3;
})
test('sum should be correct', () => {
    //action
    const result = sum(a,b);
    //expected result
    expect(result).toBe(3);
})

test('mult must be correct', ()=> {
    const result = mult(a, c);
    expect(result).toBe(3);
})

test('splitting into words should be correct', ()=> {
    const sent1 = "Hello, my friend!"
    const sent2 = "JS is prog language."

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("is");
    expect(result2[2]).toBe("prog");
    expect(result2[3]).toBe("language");
})