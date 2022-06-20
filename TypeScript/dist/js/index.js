"use strict";
// Declarando variável
let a = 10;
const b = "Jailson";
const c = true;
a = 50;
console.log(a);
// Inferencia X Annotation 
let d = 15;
//d = "15"
let e = 100;
// Tipos básicos 
let firstName = "Jailson";
let age = 20;
let isProgrammer = true;
// String != string 
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
// object 
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// Tupas
let myTupe;
myTupe = [5, "Ts", ["React", ".js"]];
// myTupe = [true, false, true]
// object literais -> {prop: value}
const user = {
    name: "Jailson",
    age: 19,
};
console.log(user);
console.log(user.name, ' tem ' + user.age + ' anos.');
// como se fosse a tuba não conseguimos add nada, apenas alterar o que ja estava, mais add outra categoria como JOB n da.
// user.job = "Programador"
// <><><><><><><>
// Any 
let x = 0;
x = true;
x = "teste";
x = [];
console.log(typeof x);
// union type - união de tipos
let id = "10";
id = 100;
id = 'lote';
const userId = 10;
const productId = "00001";
const shirId = 123;
// enum 
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name1: "Camisa gola V",
    size: Size.P,
};
console.log(camisa);
// Literal types
let test;
// test = "OutroValor" <> Como mudar esse valor
test = 'Autenticado';
test = null;
// Funções
function sum(aa, bb) {
    return aa + bb;
}
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Jailson"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 5 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// Norrowing <> Checagem típos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
// generics 
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
