# CHALLENGE: Tipos en TypeScript

## Ejercicio 3

- Implementación de un tipo de enumeración.
- Implemente un tipo enum denominado Estacion que represente las constantes "Otono", "Invierno", "Primavera" y "Verano".
- Actualice la función para que pueda pasar la temporada haciendo referencia a un elemento en enum, por ejemplo Estacion.Otono en lugar de la cadena literal "Otono".

```javascript
function mesesDeLaEstacion(estacion) {
  let mesesEstacion: string;
  switch (estacion) {
    case "Otono":
      mesesEstacion = "Septiembre a Noviembre";
      break;
    case "Invierno":
      mesesEstacion = "Diciembre a Febrero";
      break;
    case "Primavera":
      mesesEstacion = "Marzo a Mayo";
      break;
    case "Verano":
      mesesEstacion = "Junio a Agosto";
  }
  return mesesEstacion;
}

console.log(mesesDeLaEstacion("Otono"));
```
