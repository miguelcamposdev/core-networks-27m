# CHALLENGE: Tipos en TypeScript

## Ejercicio 1

- Modificación del código de JavaScript existente para que tenga variables fuertemente tipadas.
- Mejorar la sintaxis de los strings incluyendo expresiones.
- Optimizar el nº de líneas de código de la solución.

```javascript
let firstName;
let lastName;
let fullName;
let age;
let spCitizen;

firstName = "Miguel";
lastName = "Campos";
age = 35;
spCitizen = false;
fullName = firstName + " " + firstName;

if (spCitizen) {
  console.log(
    "My name is " + fullName + ", I'm " + age + ", and I'm a citizen of Spain."
  );
} else {
  console.log(
    "My name is " +
      fullName +
      ", I'm " +
      age +
      ", and I'm not a citizen of Spain."
  );
}
```
