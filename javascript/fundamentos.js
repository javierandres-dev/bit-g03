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

// Incremento y decremento
resultado = ++numero1;
resultado = --numero1;
//console.log('resultado:', resultado);

// Comparación
resultado = 10 < 10;
resultado = 10 <= 10;
resultado = 10 > 9;
resultado = 10 >= 10;
resultado = 10 == 10;
resultado = 10 == '10';
resultado = 10 != '10';
resultado = 10 !== '10';
resultado = 10 === '10';
resultado = 'hola' === 'ola';
resultado = 'hola' < 'ola';
resultado = 'hola' < 'bola';
//console.log('resultado:', resultado);

// Reversar
resultado = 10 === 10;
//console.log('resultado:', !resultado);

// Lógicos
resultado = 10 === 10 && 5 === 50;
resultado = 10 === 10 || 5 === 50;
resultado = !(10 === 10);
//console.log('resultado:', resultado);

// Operador ternario
resultado = 10 === 100 ? 'si, es verdadero' : 'no, es falso';
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
//const entrada = prompt('Escribe un número:');
//console.log('entrada:', entrada);
//alert('Ingresaste el número: ' + entrada);
//const confirmado = confirm('Selecciona OK para confirmar');
//console.log(confirmado);

// Función interactiva
function suma() {
  const num1 = parseInt(prompt('Ingrese el primer número: '));
  const num2 = parseInt(prompt('Ingrese el segundo número: '));
  //alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
  alert(`El resultado de ${num1} más ${num2} es ${num1 + num2}`);
}

//suma();

// Función declarada
function mostrartexto(texto) {
  console.log(texto);
}

//mostrartexto('este es el texto');
//console.log(mostrartexto('este es el texto'));

// Función expresada
const mostrarNumero = (numero) => {
  console.log(numero);
};

//mostrarNumero(10);
//console.log(mostrarNumero(10));

const retornaVerdadero = () => true;

//console.log(retornaVerdadero());

/* Hoisting vs Scope */
function probandoAmbito() {
  var texto;
  //console.log(texto);
  texto = 'soy texto';
  //console.log(texto);
}

//probandoAmbito();
//console.log(texto);

const probandoAmbitoExp = () => {
  var texto;
  //console.log(texto);
  texto = 'soy texto';
  //console.log(texto);
};

//probandoAmbitoExp();
//console.log(texto);

/* Control de flujo */
// Condicionales - if, if... else, if...else if...else, op ternario, switch
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    console.log('es mayor de edad');
  } else {
    console.log('no es mayor de edad');
  }
}

//esMayorDeEdad(8);
//esMayorDeEdad(18);

function esPositivoOnegativo(numero) {
  if (numero > 0) {
    console.log('el número es positivo');
  } else if (numero < 0) {
    console.log('el número es negativo');
  } else {
    console.log('el número es cero');
  }
}
//esPositivoOnegativo(1);
//esPositivoOnegativo(-1);
//esPositivoOnegativo(0);

function esPepita(nombre) {
  const respuesta = nombre === 'pepita' ? 'Si, es pepita' : 'No, no es';
  console.log(respuesta);
}

//esPepita('pepita');
//esPepita('pepito');

const esPepito = (nombre) =>
  nombre === 'pepito' ? 'Si, es pepito' : 'No, no es';

//console.log(esPepito('pepito'));
//console.log(esPepito('pepita'));

function nivelAcceso(perfil) {
  switch (perfil) {
    case 'administrador':
      console.log('redirigir a panel administrativo...');
      break;
    case 'vendedor':
      console.log('redirigir a panel de ventas...');
      break;
    case 'cliente':
      console.log('redirigir a tienda virtual...');
      break;
    default:
      console.log('redirigir a formulario de registro...');
      break;
  }
}

//nivelAcceso('x');
//nivelAcceso('cliente');
//nivelAcceso('vendedor');
//nivelAcceso('administrador');

// Ciclos - do..while, while, for
function deseaSalir() {
  let respuesta;
  do {
    respuesta = !confirm('¿Desea salir?');
  } while (respuesta);
  console.log('Se salió');
}

//deseaSalir();

function deseaEntrar() {
  let contador = 0;
  let respuesta = confirm('¿Desea entrar?');

  while (respuesta === true && contador < 1) {
    console.log('Entró!');
    contador++;
  }
  console.log('Fuera.');
}

//deseaEntrar();

function mostrarHastaN() {
  const n = prompt('ingrese un número: ');
  let numero = 1;
  let mostrar = '';
  while (numero <= n) {
    mostrar += numero + '\n';
    numero++;
  }
  alert(mostrar);
  console.log(mostrar);
}
//mostrarHastaN();

function mostrarHastaM(m) {
  for (let numero = 1; numero <= m; numero++) {
    console.log('código a ejecutar');
  }
}

//mostrarHastaM(5);
//mostrarHastaM(5000);

/* Estructuras de datos */
// Arreglos, array, vector, lista, matriz
let arreglo = Array();
arreglo = [];
arreglo = [1, 2, 3, 4, 'hola', false, ['a', 'b', 'c']];
//console.log(arreglo);
// console.log(typeof arreglo);
// console.log(arreglo instanceof Object);
// console.log(arreglo instanceof Array);
// console.log(arreglo instanceof String);
//console.log(arreglo[5]);
//console.log(arreglo[0]);
//console.log(arreglo.length);

/*
function longitudArr(arr) {
  let contador = 0;
  while (arr[contador] != undefined) {
    contador++;
  }
  console.log(contador);
}
longitudArr(arreglo);
*/

// Objetos
let objeto = Object();
objeto = {};
objeto = {
  propiedad: 'valor',
  uno: 1,
  dos: 2,
  tres: 3,
  arr: ['a', 'b'],
  completado: true,
  persona: {
    nombre: 'pepita',
    apellido: 'pérez',
  },
  met1: () => {
    let txt = 'soy un método';
    console.log(txt);
  },
};
//console.log(objeto);
// console.log(typeof objeto);
// console.log(objeto instanceof Object);
//console.log(objeto.tres);
//console.log(objeto['completado']);
//objeto.met1();

/* Destructuración */
let perfiles = ['administrador', 'secretario', 'vendedor', 'cliente'];
//console.log(perfiles);
const [perfilAdmin, perfilSecre] = perfiles;
//console.log(perfilAdmin, perfilSecre);

perfiles = {
  perfil1: 'administrador',
  perfil2: 'secretario',
  perfil3: 'vendedor',
  perfil4: 'cliente',
};
//console.log(perfiles);
const { perfil2, perfil3 } = perfiles;
//console.log(perfil2, perfil3);

/* Operador Rest */
function mostrarLista(...lista) {
  const list = lista;
  console.log(list);
  const [nTienda] = list;
  console.log(nTienda);
}
//mostrarLista('tienda doña pepa', 1, 2, 3, 4);
//mostrarLista('tienda don pepe', 'a', 'e', 'i', 'o', 'u');

const multiplicar = (multiplicador, ...numeros) =>
  numeros.map((numero) => numero * multiplicador);
resultado = multiplicar(3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//console.log(resultado);
resultado = multiplicar(5, 123, 124, 125);
//console.log(resultado);

function mostrarTotal(...valores) {
  let total = 0;
  for (const i of valores) {
    total += i;
  }
  console.log(total);
}
//mostrarTotal(100, 150, 250);
//mostrarTotal(1000, 150, 250);

/* Operador Spread */
const empleado = {
  nombre: 'pepita',
  apellido: 'pérez',
  cargo: 'vendedor',
  activo: true,
  nHijos: 2,
};
const copiaEmpleado = empleado;
const copiadoEmpleado = { ...empleado };
empleado.nHijos = 3;
empleado.email = 'ej@ejemplo.com';
//console.log(empleado);
//console.log(copiaEmpleado);
//console.log(copiadoEmpleado);

const objA = {
  a: 'a',
  b: 'b',
};
const objB = {
  c: 'c',
  d: 'd',
};
const objC = { objA, objB };
//console.log(objC);
const objD = { ...objA, ...objB };
//console.log(objD);
