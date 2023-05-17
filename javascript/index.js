'use strict'; // Habilitar el modo estricto
// Soy un comentario en línea
/*
  Soy un comentario en bloque
*/
// console.log('Hola desde una etiqueta script en un archivo externo');

// VARIABLES
var variableVar = 'contenido var';
let variableLet = 'contenido let';
const constanteConst = 'contenido const';

variableVar = 1;
variableLet = 1;
//constanteConst = 1;

// console.log(variableVar);
// console.log(variableLet);
// console.log(constanteConst);

/* Ámbito de las variables o scope */
{
  var dia = 'lunes';
}
//console.log(dia);

{
  //console.log(mes);
  let mes = 'mayo';
}
//console.log(mes);

/* Modo estricto */
//nombre = 'pepita';
//console.log(nombre);

/* Tipos de dato primitivos */
let miVariable = 'a';
miVariable = 'hola';
miVariable = 10;
miVariable = 0.5;
miVariable = true;
miVariable = false;
miVariable = undefined;
miVariable = null;
miVariable = NaN;
//console.log('valor:', miVariable);
//console.log('tipo de dato:', typeof miVariable);

/* Conversión de tipos */
miVariable = '10';
//console.log('valor:', miVariable);
//console.log('tipo de dato:', typeof miVariable);
//const resultado = miVariable + 10;
//console.log('resultado:', resultado);
//console.log('tipo de dato de resultado:', typeof miVariable);
//miVariable = +miVariable;
miVariable = Number(miVariable);
let resultado = miVariable + 10;
//console.log('resultado:', resultado);
//console.log('tipo de dato de resultado:', typeof miVariable);

/* Operadores */
// Concatenación
let nombre = 'pepita';
let apellido = 'pérez';
let nombreCompleto = nombre + ' ' + apellido;
//console.log(nombreCompleto);
// Aritméticos
let numero1 = 10;
let numero2 = 5;
resultado = numero1 + numero2;
resultado = numero1 - numero2;
resultado = numero1 * numero2;
resultado = numero1 / numero2;
resultado = numero1 % numero2;
//console.log('resultado:', resultado);

/* Funciones */
function sumar(num1, num2) {
  const resultado = num1 + num2;
  return resultado;
}

const retornoDeLaFuncion = sumar(numero1, numero2);
//console.log(retornoDeLaFuncion);

/* Interacción */
//console.log('Imprimir en consola');
const entrada = prompt('Escribe un número:');
console.log('entrada:', entrada);
alert('Ingresaste el número: ' + entrada);
const confirmado = confirm('Selecciona OK para confirmar');
console.log(confirmado);
