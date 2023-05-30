import { useState, useRef } from 'react';

export const Referencia = () => {
  const [contador, setContador] = useState(0);

  const nombre = useRef('pepita');
  console.log(nombre);
  const $btnRef = useRef();

  const manejarClick = () => {
    nombre.current = 'fulanita';
    $btnRef.current.textContent = 'Nombre cambiado';
  };

  return (
    <>
      <div>Referencia</div>
      <div>Contador: {contador}</div>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <div>Nombre: {nombre.current}</div>
      <button ref={$btnRef} onClick={manejarClick}>
        Cambiar nombre
      </button>
    </>
  );
};
