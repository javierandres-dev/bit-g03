import { useState } from 'react';

export const Estado = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div>Estado</div>
      <button onClick={() => setContador(contador + 1)}>
        Clicks: {contador}
      </button>
    </>
  );
};
