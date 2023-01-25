// NUMBERS
// Son números, útiles para hacer operaciones matemáticas

// const positiveExample = 8291;
// console.log(positiveExample);

// const negativeExample = -8291;
// console.log(negativeExample);

// const floatExample = 82.91;
// console.log(floatExample);

// Podemos combinarlos con operadores aritméticos y comparadores lógicos
// ¿Necesitamos ejemplos?

// Podemos convertir otros tipos de datos en numbers

// const booleanExampleTrue = true;
// const booleanExampleFalse = false;

// const stringExampleOne = '123';
// const stringExampleTwo = '';

// console.log(Number(booleanExampleTrue));
// console.log(Number(booleanExampleFalse));
// console.log(Number(stringExampleOne));
// console.log(Number(stringExampleTwo));

// Tenemos un tipo especial de número: NaN

// const stringExampleThree = 'Something';

// console.log(Number(stringExampleThree));
// console.log(typeof Number(stringExampleThree));

// Y también tenemos el objeto Math, que nos permite realizar
// operaciones avanzadas e incluye funcionalidades relacionadas
// con las matemáticas

// EJERCICIOS CON MÉTODOS Y MATH

 const leaveThisUncommented = 156.34589;

// 1. Cambia el tipo de leaveThisUncommented a string
const changeToString= leaveThisUncommented.toString()
console.log(changeToString)
// 1. Redondea leaveThisUncommented a dos decimales
const rounded = leaveThisUncommented.toFixed(2)
console.log(rounded)
// 3. Determina si leaveThisUncommented es un número entero
const isEntero = Number.isInteger(leaveThisUncommented)
console.log(isEntero)
// 4. Determina si leaveThisUncommented es NaN
const isNan = Number.isNaN(leaveThisUncommented)
console.log(isNan)
// 5. Castea leaveThisUncommented a número entero
const castea = Number.parseInt(leaveThisUncommented);
console.log(castea)
// 6. Imprime el número PI
const pi = Math.PI
console.log(pi)

// 7. Redondea leaveThisUncommented al número entero superior más cercano
const roundedMax = Math.ceil(leaveThisUncommented)
console.log(roundedMax)
// 8. Redondea leaveThisUncommented al número entero inferior más cercano
const roundedMin = Math.round(leaveThisUncommented)
console.log(roundedMin);
// 9. Genera un número entero aleatorio del 1 al 3
const randomtotrhee = Math.floor(Math.random()*3 +1)
console.log(randomtotrhee)
