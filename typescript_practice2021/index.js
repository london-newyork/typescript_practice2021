let hasValue = true;
let count = 10;
// class Person {
//     name: string
//     constructor(initName: string){
//         this.name = initName
//     }
//     // greeting (this: { name: string }){
//     //     console.log(`Hello! My name is ${this.name}`)
//     // }
//     greeting (this: Person){
//         console.log(`Hello! My name is ${this.name}`)
//     }
// }
// const quill = new Person('Quill')
// quill.greeting()
// const anotherQuill = {
//     name: 'anotherQuill',
//     greeting(){},
//     anotherGreeting: quill.greeting
// }
// anotherQuill.anotherGreeting()
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years`);
    }
}
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age); //Teacherから直接とる。
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years`);
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
teacher.subject = 'Music';
console.log(teacher.subject);
teacher.greeting();