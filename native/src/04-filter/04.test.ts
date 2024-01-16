test("should take elderly men over 90", () => {
    const ages = [17, 3, 100, 98, 23, 36, 35];
    const elderlyMen = ages.filter(age => age > 90);
    expect(elderlyMen.length).toBe(2);
} )


test("should take courses cheaper then 160", () => {
    const courses = [
        {title: 'CSS', price: 100},
        {title: 'React', price: 80},
        {title: 'JS', price: 120}
    ]
    const cheapCourses = courses.filter(courses => courses.price < 200);

    expect(cheapCourses.length).toBe(3);
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].title).toBe('React');
    expect(cheapCourses[2].title).toBe('JS');
} )


test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Butter', isDone: false},
        {id: 3, title: 'Oil', isDone: true},
        {id: 4, title: 'Sweets', isDone: false}
    ]
    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Bread');
    expect(completedTasks[1].title).toBe('Oil');
})