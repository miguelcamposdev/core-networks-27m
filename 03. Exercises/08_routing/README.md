# CHALLENGE: ANGULAR ROUTING

## Ejercicio 1

Según el ejercicio visto sobre el listado de People de la API de Star Wars, crear la lista de películas de Star WARS que se puede consultar en el siguiente endpoint:

https://swapi.dev/api/films

Se debe dibujar una lista de las películas (lo más bonita posible, pero sin tampoco perder mucho tiempo) y que se muestre el nombre de la película y un botón para navegar al detalle. La navegación al detalle, debe hacer con Angular Routing, pasando como parámetro el id de la película.

Deberá programarse por tanto un componente para mostrar el detalle de una película y que se pueda mostrar ahí toda la información de la película cuyo id me ha llegado por parámetro a través de la URL. El endpoint para obtener la información de una película a través de su id es:

https://swapi.dev/api/films/1

Siendo en este caso la URL para mostrar la película con ID 1.

## Ejercicio 2

Relizar una mejora sobre el código realizado en clase que muestra la lista de Películas populares.

- Al acceder al detalle de una película se debe mostrar la información básica de esa película. Utilizar para ello el endpoint declarado en la siguiente página de la documentación:

https://developers.themoviedb.org/3/movies/get-movie-details

- Después debemos mostrar una lista de trailers de esa película (si existen). La request que tendremos que lanzar está descrita en la siguiente página que nos facilita un endpoint para poder obtener los videos de una película:

https://developers.themoviedb.org/3/movies/get-movie-videos
