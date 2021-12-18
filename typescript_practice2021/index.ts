let hasValue = true
let count = 10
type Clothsize = 'Small' | 'Mid' | 'Large'

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

// class Person {
//     static species = 'Homo sapiens'
//     static isAdult(age: number){
//         if (age > 17) return true
//         return false
//     }
//     constructor(readonly name: string, protected age: number){
//     }
//     incrementAge(){
//         this.age += 1
//     }
//     greeting(this: Person){
//         console.log(`Hello! My name is ${this.name}. I am ${this.age} years`)
//     }
// }

// class Teacher extends Person {
//     get subject(): string {
//         if (!this._subject){
//             throw new Error('There is no subject.')
//         }
//         return this._subject
//     }

//     set subject(value){

//     }
//     constructor(name: string, age: number, private _subject: string){
//         super(name, age)//Teacherから直接とる。
//     }
//     greeting(){
//         console.log(`Hello! My name is ${this.name}. I am ${this.age} years`)
//     }
// }
// const teacher = new Teacher('Quill', 38,'Math')
// teacher.subject = 'Music'
// console.log(teacher.subject)
// teacher.greeting()

// type Human = {
//     name: string
//     age: number
// }

// const human: Human = {
//     name: 'Quill',
//     age: 38
// }

// let developer: Human

interface Human {
    name: string
    age: number
    greeting(message: string): void//interface上ではこの形でメソッドを指定できる
}//interfaceはオブジェクトのみを扱う。typeは全部を扱う。
class Developer implements Human {
    constructor (public name: string, public age: number, public experience: number){
    }
    greeting(message: string){
        console.log('Hello!')
    }
}

const human: Human = {
    name: 'Quill',
    age: 38,
    greeting(message: string){
        console.log(message)
    }
}

let developer: Human