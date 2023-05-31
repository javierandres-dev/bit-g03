import { useEffect, useState } from 'react';
import { Tarjeta } from './Tarjeta';

export const Tarjetas = ({ catalogo }) => {
  const [cart, setCart] = useState([]);

  const articulos = catalogo.map((articulo) => (
    <Tarjeta
      key={articulo.id}
      articulo={articulo}
      cart={cart}
      setCart={setCart}
    />
  ));

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  return (
    <>
      <div className='titulo'>Catálogo</div>
      <div className='tarjetas'>{articulos}</div>
    </>
  );
};
