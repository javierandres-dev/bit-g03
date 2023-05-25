'use strict';
const $div = document.getElementById('root');
const $btn = document.createElement('button');

let contador = 0;

$btn.textContent = `Clicks: ${contador}`;

$div.appendChild($btn);

$btn.addEventListener('click', () => {
  contador += 1;
  $btn.textContent = `Clicks: ${contador}`;
});
