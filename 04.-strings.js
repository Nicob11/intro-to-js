// STRINGS
// Son cadenas de caracteres. Los definimos con comillas simples o dobles

// const example = 'Hello, world!';
// console.log(example);

// const secondExample = "Hello, world!"
// console.log(secondExample);

// También podemos utilizar los template literals, que nos permiten:
// 1. Introducir saltos de línea sin utilizar el escape \n
// 2. Introducir variables de JS dentro de la propia string

// // const hello = 'Hello';
// // const world = 'World';
// // const fullString = '' // A COMPLETAR POR LOS ESTUDIANTES
// // console.log(fullString);

// Podemos concatenar strings con el operador +

// const hello = 'Hello';
// const world = 'World';
// const fullString = '' // A COMPLETAR POR LOS ESTUDIANTES
// console.log(fullString);

// Además, las strings tienen una propiedad length...
 const leaveThisUncommented = '   This is an Example String. Use your methods here   ';

// console.log(leaveThisUncommented.length);

// ...que nos permite utilizarlas como arrays

 //console.log(leaveThisUncommented[1]);
// console.log(leaveThisUncommented[6]);
// console.log(leaveThisUncommented[0]);
// console.log(leaveThisUncommented[leaveThisUncommented.length - 1]);

// Por último, podemos utilizar los métodos nativos de JavaScript


// EJERCICIOS CON MÉTODOS

// 1.- Imprime leaveThisUncommented todo en minúsculas
const tolowercase = leaveThisUncommented.toLowerCase();
console.log(tolowercase)
// 2.- Imprime leaveThisUncommented todo en mayúsculas
const touppercase = leaveThisUncommented.toUpperCase();
console.log(touppercase)
// 3.- Quita los espacios iniciales y finales de leaveThisUncommented
const withoutspaces = leaveThisUncommented.trim()
console.log(withoutspaces)
// 4.- Determina si leaveThisUncommented incluye la palabra 'stop'
const includes = leaveThisUncommented.includes('stop')
console.log(leaveThisUncommented.includes('stop'))
// 5.- Determina si leaveThisUncommented termina con la palabra 'here'
const finishwith = leaveThisUncommented.trim().endsWith('here')
console.log(finishwith)
// 6.- Sustituye todas las "e" de leaveThisUncommented por "a"
const changeAforE = leaveThisUncommented.toLowerCase().replaceAll('e','a')
console.log(changeAforE)
// 7.- Encuentra en qué posición de leaveThisUncommented se encuentra la palabra "Use"
const whatPositon = leaveThisUncommented.search('Use')
console.log(whatPositon)
// 8.- Divide leaveThisUncommented por el punto
const divide = leaveThisUncommented.split('.')
console.log(divide)

// 9.- Obtén el fragmento de leaveThisUncommented que va desde el índice 30 hasta el final
const from = leaveThisUncommented.slice(30)
console.log(from)
// 10.- Obtén el fragmento de leaveThisUncommented que va desde el índice 30 hasta el 46
const from2 = leaveThisUncommented.slice(30,46)
console.log(from2)