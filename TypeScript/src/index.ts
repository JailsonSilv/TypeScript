// Declarando variável
let a: number = 10
const b: string = "Jailson"
const c: boolean = true 


a = 50;

console.log(a)

// Inferencia X Annotation 
let d = 15;
//d = "15"

let e: number = 100;

// Tipos básicos 
let firstName: string = "Jailson"
let age: number = 20
let isProgrammer: boolean = true

// String != string 

console.log(typeof firstName);

firstName = "João"

console.log(firstName);

// object 
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers);
console.log(myNumbers.length)
console.log(firstName.toUpperCase());
myNumbers.push(5)

console.log(myNumbers)

// Tupas
let myTupe: [number, string, string[]]

myTupe = [5, "Ts", ["React", ".js"]]

// myTupe = [true, false, true]

// object literais -> {prop: value}
const user: {name: string, age: number} ={
    name: "Jailson",
    age: 19,
};

console.log(user);

console.log(user.name,  ' tem ' + user.age + ' anos.')
// como se fosse a tuba não conseguimos add nada, apenas alterar o que ja estava, mais add outra categoria como JOB n da.
// user.job = "Programador"

// <><><><><><><>
// Any 
let x:any = 0

x = true
x = "teste"
x = []

console.log(typeof x)

// union type - união de tipos
let id: string | number = "10"
id = 100
id = 'lote'

// id = true
// id []

// Type alías
type myIdTypes = number | string 

const userId: myIdTypes = 10
const productId: myIdTypes = "00001"
const shirId: myIdTypes = 123

// enum 
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
} 

const camisa = {
    name1: "Camisa gola V",
    size: Size.P,
}

console.log(camisa);

// Literal types
let test: "Autenticado" | null

// test = "OutroValor" <> Como mudar esse valor

test = 'Autenticado';
test = null;


// Funções
function sum(aa: number , bb: number) {
    return aa + bb
}

function sayHello(name: string): string {
    return `Hello ${name}`
}

console.log(sayHello("Jailson"));

function logger(msg: string): void { //  função q n retorna nada
    console.log(msg)
}

logger("Teste");
 
// interfaces

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 1, n2: 5}));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumbers:MathFunctionParams = {
    n1: 5, 
    n2: 10
}

console.log(multiplyNumbers(someNumbers))

// Norrowing <> Checagem típos
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`)
        return;
    }
    console.log("Não foi passado um número")
}

doSomething(5);
doSomething(true);

// generics 
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ["a", "b", "c"]

showArraysItems(a1)
showArraysItems(a2)

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name 
        this.role = role
        this.isApproved = isApproved
    }
}

const zeca = new User ("Zeca", "Admin", true);

console.log(zeca)

