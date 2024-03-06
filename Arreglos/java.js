
let numeros = [4, 8, 12, 16, 20];

let concatenado1 = numeros.map(elemento => elemento + "A");
console.log("Concatenar 'A':", concatenado1);

let primerMayor10 = numeros.find(elemento => elemento > 10);
console.log("Primer elemento mayor a 10:", primerMayor10);


let animales = ["león", "tigre", "oso", "lobo"];

let filtradoO = animales.filter(palabra => palabra.includes("o"));
console.log("Filtrar palabras con 'o':", filtradoO);

let reducir = animales.reduce((acumulador, palabra) => acumulador + palabra, "");
console.log("Reducir a cadena:", reducir);


let numeros2 = [25, 36, 49, 64, 81];


let filtrarPares = numeros2.filter(numero => numero % 2 === 0);
console.log("Filtrar números pares:", filtrarPares);


let raicesCuadradas = numeros2.map(numero => Math.sqrt(numero));
console.log("Mapear a raíces cuadradas:", raicesCuadradas);


let arreglo = ["sol", "luna", "estrella", "nube"];


let longitud= arreglo.map(palabra => palabra.length);
console.log("Mapear a longitudes de palabras:", longitud);


let filtradoLongitud= arreglo.filter(palabra => palabra.length > 4);
console.log(" Filtrar palabras con más de 4 letras:", filtradoLongitud);



