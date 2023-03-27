let x = 10;
let y;
const PI = 3.14; // number

x = 20;
y = 500;

y = "Hello";

var z = 100;

if(true) {
    let condicion = false;
}


console.log(x);

let mensaje = "Hola Mundo";
let welcome = "bienvenido";
let nombre = "Juan";

// Template literals
console.log(`${mensaje}, ${welcome}: ${nombre}`);

let i: number | undefined;


function suma(x: number, y: number) {
    console.log(x + y);
}

function inc(x: number) {
    return x + 1;
}

suma(10, 20);

let resultado = x => console.log(x + 1);
