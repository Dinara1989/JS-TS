const ages = [17, 3, 100, 98, 23, 36, 35];

const predicate = (age:number) => {
    return age > 90;
}

const elderlyMen = [100];
type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 100},
    {title: 'React', price: 80},
    {title: 'JS', price: 120}
]

const cheapPredicate = (course: CourseType) => {
    return courses.filter( ()=> {course.price < 200})
}
