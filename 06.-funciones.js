// FUNCIONES
// Las funciones son bloques de código reutilizable.
// Como las variables, lo primero que hacemos es declararlas,
// para almacenarlas en la memoria. Luego podemos ejecutarlas

// function exampleFunction() {
//     console.log('Hello, world!');
// }

// exampleFunction();

// A nuestras funciones les podemos pasar argumentos. Se trata de
// variables que utilizaremos dentro de la propia función

// const helloWorld = 'Hello, world!';

// function exampleFunction(printStatement) {
//     console.log(printStatement);
// }

// exampleFunction(helloWorld);


// EJERCICIOS

// 1. Escribe una función que imprima la suma de dos números
// proporcionados como parámetros
const suma = (num1, num2) => console.log(num1 + num2);
suma(2,4);

// 2. Escribe una función que imprima un número aleatorio, de 1
// hasta el rango proporcionado
// ---
const aleatorio = (end) => { let numero = Math.floor(Math.random()*end + 1) 
console.log(numero)};

aleatorio(20);

// Las funciones pueden utilizar la keyword return, que:
// 1. Les asigna un valor de retorno
// 2. Interrumpe la ejecución del código

// function addTwoNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// const addResult = addTwoNumbers(1, 3);

// console.log(addResult);

// EJERCICIO

// 1. Retomando la función que genera números aleatorios, haz que retorne
// el resultado, no que lo imprima en consola
const alereturn = (end) => { let numero = Math.floor(Math.random()*end + 1) 
    return numero};
    
console.log(alereturn(20));

// IMPORTANTE
// 1. Debemos tratar de que nuestras funciones solo cumplan un cometido
// 2. Debemos tratar de escribir funciones puras (siempre devuelven el mismo
// resultado con los mismos parámetros)
// 3. Debemos evitar los efectos secundarios en nuestras funciones
// 4. Debemos tener mucho cuidado con el nombre de nuestras funciones

// Podemos utilizar funciones sin nombre. Las llamaremos funciones anónimas.

// const exampleFunction = function () {
//     console.log('Anonymous function!');
// }
 
// exampleFunction();

// Existe una sintaxis especial desde EC6: las arrow functions

// const exampleFunction = () => {
//     console.log('Anonymous function!');
// }
 
// exampleFunction();

// EJERCICIOS

// 1. Escribe una arrow function que imprima en la consola el parámetro
// que le proporciones
const print = (word) => console.log(word);
print('4GeeksAcademy');
// 2. Escribe una arrow function que sume dos números proporcionados
const sum = (num1, num2) => num1 + num2;
console.log(sum(33,345));
// 3. Escribe una arrow function que imprima en la consola la multiplicación
// de dos números proporcionados
const mult = (num1, num2) => num1 * num2;
console.log(mult(3030,23));
// 4. Escribe una arrow function que reste dos números proporcionados
const rest = (num1, num2) => num1 - num2;
console.log(rest(33,345));
// 5. Escribe una arrow function que multiplique dos números proporcionados

// 6. Escribe una arrow function que divida dos números proporcionados
const div = (num1, num2) => num1 / num2;
console.log(div(33,345));
// 7. Escribe una arrow function que reciba dos números y una operación,
// ejecute la operación e imprima el resultado en pantalla
//const oper = (num1, num2, accion) => console.log(num1, accion,num2);
//console.log(oper(2 + 3));