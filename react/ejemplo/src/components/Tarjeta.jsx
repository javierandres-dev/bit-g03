export const Tarjeta = ({ articulo, cart, setCart }) => {
  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className='tarjeta'>
      <figure>
        <img src={articulo.imagen} alt={articulo.nombre} />
        <figcaption>{articulo.nombre}</figcaption>
      </figure>
      <div>${articulo.precio}</div>
      <button onClick={() => agregarAlCarrito(articulo)}>Agregar</button>
    </div>
  );
};
