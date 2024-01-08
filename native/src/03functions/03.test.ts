import {StudentType} from "../02objects/02";
import {addSkill, makeStudentActive, StudentLocation} from "./03";

let student: StudentType;
beforeEach(()=> {
    student = {
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
    };
})
test('new tech skill shoud be addedto student', ()=> {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS');

    expect(student.technologies.length). toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be made active', ()=> {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test('Does student live in city', ()=> {
    let result1 = StudentLocation(student, 'Bangui');
    let result2 = StudentLocation(student, 'Kyiv');

    expect(result1).toBe(true);
    expect(result2).toBe(false);
})