export const Carrito = ({
  totalArticulos,
  totalProductos,
  total,
  limpiarCarrito,
  manejarPago,
}) => {
  return (
    <div className='carrito'>
      <span>Artículos: {totalArticulos}</span>
      <span>Productos: {totalProductos}</span>
      <span>Total: {total}</span>
      {total > 0 && (
        <>
          <button onClick={limpiarCarrito}>Limpiar carrito</button>
          <button onClick={manejarPago}>Pagar</button>
        </>
      )}
    </div>
  );
};
