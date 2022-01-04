interface Engineer {
    name: string
    role: string
}

interface Blogger {
    name: string
    follower: number
}

// type EngineerBlogger = Engineer & Blogger
interface EngineerBlogger extends Engineer , Blogger {}
const quill : EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

// type tmp = string & number

type NumberBoolean = number | boolean
type StringNumber = string | number
type Mix = NumberBoolean & StringNumber //Mixの型は上記で両方重なってる部分

function toUpperCase( x: string): string // → const upperHello がstringになる　// #1
function toUpperCase( x: number): number // → const upperHello がstringになる // #2
function toUpperCase( x: string | number) : string | number { // #3
    if (typeof x === 'string'){
        return x.toUpperCase()
    }
    return x //numberが返ってくる
}

interface TmpFunc {
    (x: string) : number
    (x: number) : number
}

const upperHello : TmpFunc = function (x: string | number) { return 0}

// interface FuncA {
//     (a: number, b: string): number
//     (a: string, b: number): number
// }

// interface FuncB {
//     (a: string): number
// }

// let intersectionFunc: FuncA & FuncB
// intersectionFunc = function(a: number | string, b?: number | string) { return 0 }

interface FuncA {
    (a: number, b: string): number
    (a: string, b: number): number
}

interface FuncB {
    (a: string): number
}

let unionFunc: FuncA | FuncB
// let unionFunc: (a: never) => number
// unionFunc = function (a: number) { return 'hi' }
// unionFunc()

// const upperHello = toUpperCase('hello') //hello → Hello がかえる オーバーロードするときは関数の型に注意 #3は無視される

type NomadWorker = Engineer | Blogger
function describeProfile(nomadWorker: NomadWorker){
    console.log(nomadWorker.name);
    if('role' in nomadWorker){
        console.log(nomadWorker.role)
    }
    if('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}

class Dog {
    kind: 'dog' = 'dog'
    speak() {
        console.log('bow-wow');
    }
}

class Bird {
    kind: 'bird' = 'bird'
    speak() {
        console.log('tweet-tweet');
    }
    fly(){
        console.log('flutter');
    }
}

type Pet = Dog | Bird
function havePet(pet: Pet){
    pet.speak()
    switch(pet.kind){
        case 'bird':
        pet.fly()
    }
    if(pet instanceof Bird){
        pet.fly()
    }
}

havePet(new Bird())

// const input = <HTMLInputElement>document.getElementById('inputffff')
const input = document.getElementById('input')! //nonnullアサーションオペレータ
// const input = document.getElementById('inputffff') as HTMLInputElement //React　を使う場合はasを使う
// input.value ='initial input value'

// (document.getElementById('input') as HTMLInputElement).value = 'initial input value'

interface Designer {
    name: string
    [index: string]: string //indexシグネチャでメンバを追加できるが、ここがstringになっていたら全部他のメンバはstringに合わせる
}

const designer: Designer = {
    name: 'Quill',
    role: 'afa',
    fafa: 'fa',
}

console.log(designer.oiii);//indexシグネチャ使うとなんでも「ないプロパティ」でもアクセスできてしまう

interface DownloadedData {
    id: number
    user?: {
        name?: {
            first: string
            last: string
        }
    }
}

const downloadedData: DownloadedData = {
    id: 1
}

console.log(downloadedData.user?.name?.first); //optional chaining

const userData = downloadedData.user ?? 'no-user' //　undefined とnullに対しては no-userになる
type id = DownloadedData['user']
type id2 = DownloadedData['id' | 'user']

enum Color {
    RED,
    BLUE
}

class AdvancedPerson {
    name: string = 'Peter'
    private age: number = 35
}

class AdvancedCar {
    name: string = 'Prius'
    age: number = 5
}

let target = new AdvancedPerson()
let source = new AdvancedCar()
// target = source

function advancedFn(...args: [number, string, boolean?, ...number[]]) {
    //タプル型
}
// function advancedFn(...args: readonly [number, string, boolean?, ...number[]]) {
//     //タプル型
// }

advancedFn(0,'hi', true, 3,3,3,) //3,3,3は ...number

const milk = 'milk' as const
let drink = milk
const array = [10,20] as const
const peter = {
    name: 'Peter',
    age: 38
} as const

type PeterType = typeof peter

