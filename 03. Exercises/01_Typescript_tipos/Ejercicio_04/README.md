# CHALLENGE: Tipos en TypeScript

## Ejercicio 4

- Declaración de un tipo de matriz.
- Declare la matriz como el tipo que va a coincidir con el tipo de los elementos de la matriz.

```javascript
let randomNumbers;
let nextNumber;
for (let i = 0; i < 10; i++) {
  nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
```
