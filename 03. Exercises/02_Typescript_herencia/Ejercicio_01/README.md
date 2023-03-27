# CHALLENGE: Herencia en TypeScript

## Ejercicio 1

Sobre la clase “Persona” que hemos visto, implementar una clase “Empleado” que herede de esta,
Aportando un nuevo atributo “sueldo”. Implementar en esta nueva clase un nuevo método “declarationRenta()”
que indique por consola si el sueldo es superior a 10.000€ que debe presentar la declaración de IRPF, en otro caso
no.

```javascript
class Persona {
  protected nombre:string;

  constructor(nuevoNombre:string) {
    this.nombre = nuevoNombre;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre}`);
  }
}

let p = new Persona('Miguel');
```
