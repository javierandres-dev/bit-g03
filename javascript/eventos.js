'use strict';
const $saludo = document.getElementById('saludo');
const $saludar = document.getElementById('saludar');

const formulario = {
  nombre: null,
};

$saludar.nombre.addEventListener('input', (evento) => {
  formulario.nombre = evento.target.value;
});

$saludar.addEventListener('submit', (evento) => {
  evento.preventDefault();
  if (formulario.nombre != null) {
    $saludo.style.color = 'green';
    $saludo.textContent = `Hola, ${formulario.nombre}!`;
    $saludar.reset();
  } else {
    $saludo.style.color = 'red';
    $saludo.textContent = 'Por favor ingresa tu nombre.';
  }
});
