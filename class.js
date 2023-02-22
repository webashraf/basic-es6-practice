class Student{
    constructor(name, roll){
        this.name = name;
        this.roll = roll
    }
    name;
    class = 7;
    roll;
    school = 'Schollars home school and college.';
    result(gpa){
        console.log(`result: ${gpa} name: ${this.name}`);
    }
}

const aliAshraf = new Student('Ali Ashraf', 106);

const ashrafResult = aliAshraf.result(5)
console.log(ashrafResult);
// console.log(aliAshraf);