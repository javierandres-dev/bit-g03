export const Tarjeta = ({ articulo, agregarAlCarrito }) => {
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
