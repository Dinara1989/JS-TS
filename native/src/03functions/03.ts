import {student, StudentType} from "../02objects/02";
import {CityType, GovBuildType, HousesType} from "../02objects/02_02";

export const sum = (a:number, b:number) => {
    return a+b
}
//2й варіaнт написання функції
// function sum2(a:number, b:number){
//     return a+b
// }
// const res = sum(100, sum(3, 5))
// console.log(res)

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title:skill
    })
}
export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const StudentLocation = (student: StudentType, cityName: string) => {
    return student.address.city.title = cityName;
}

export const addMoney = (build: GovBuildType, budget: number)=> {
    build.budget += budget;
}
// export const takeMoney = (build: GovBuildType, budget: number) => {
//     build.budget -= budget;
// }
export const repairHouse = (housesType: HousesType) => {
    housesType.repaired = true;
}

export function toFireStaff(govBuildType: GovBuildType, staffCountToFire: number) {
    govBuildType.staffCount -= staffCountToFire;
}

export function toHireStaff(govBuildType: GovBuildType, staffCountToHire: number) {
    govBuildType.staffCount += staffCountToHire;
}
export function createMessage(city: CityType) {
    // return "Hello " + city.title + " citizens. I want you to be happy. All " + city.citizensNumber + " people."
    //option+enter -> replace with template string - зробить більш красивий синтаксис
    return `Hello ${city.title} citizens. 
    I want you to be happy. 
    All ${city.citizensNumber} people.` //цей синтаксис дозволяє переносити строку
}
