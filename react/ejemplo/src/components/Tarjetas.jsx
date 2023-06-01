import { useEffect, useState } from 'react';
import { Tarjeta } from './Tarjeta';
import { Carrito } from './Carrito';

export const Tarjetas = ({ catalogo }) => {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [pagar, setPagar] = useState(null);

  useEffect(() => {
    const carritoActual = JSON.parse(localStorage.getItem('miCarrito'));
    if (carritoActual && carritoActual.length > 0) {
      setCarrito(carritoActual);
    }

    const productosActuales = JSON.parse(localStorage.getItem('misProductos'));
    if (productosActuales && productosActuales.length > 0) {
      setProductos(productosActuales);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem('misProductos', JSON.stringify(productos));
    obtenerTotal();
  }, [productos]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
    actualizarProductos(item);
  };

  const actualizarProductos = (producto) => {
    if (productos.length === 0) {
      const primerProducto = { ...producto, cantidad: 1 };
      setProductos([...productos, primerProducto]);
    } else {
      const indice = productos.findIndex((p) => p.id === producto.id);
      if (indice === -1) {
        const nuevoProducto = { ...producto, cantidad: 1 };
        setProductos([...productos, nuevoProducto]);
      } else {
        const arr = [...productos];
        const productoActualizado = productos[indice];
        productoActualizado.cantidad += 1;
        arr.splice(indice, 1, productoActualizado);
        setProductos([...arr]);
      }
    }
  };

  const obtenerTotal = () => {
    let suma = 0;
    for (const i in productos) {
      const producto = productos[i];
      suma += producto.precio * producto.cantidad;
    }
    setTotal(suma);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    setProductos([]);
    setTotal(0);
    setPagar(null);
  };

  const manejarPago = () => {
    if (productos.length === 0) {
      alert('Carrito vacio.');
    } else {
      const resumen = productos.map((p) => (
        <div key={p.id}>
          {p.nombre} ${p.precio} x {p.cantidad} = ${p.precio * p.cantidad}
        </div>
      ));

      const gracias = (
        <div className='detalles-pagar'>
          <div>Gracias por su compra.</div>
          <button onClick={() => setPagar(null)}>cerrar</button>
        </div>
      );
      const detalles = (
        <div className='detalles-pagar'>
          <div className='titulo'>Resumen</div>
          {resumen}
          <div>Total artículos: {carrito.length}</div>
          <div>Total productos: {productos.length}</div>
          <div>
            <strong>Total: ${total}</strong>
          </div>
          <button onClick={limpiarCarrito}>Cancelar y limpiar carrito</button>
          <button onClick={() => setPagar(null)}>Cancelar</button>
          <button
            onClick={() => {
              setCarrito([]);
              setProductos([]);
              setTotal(0);
              setPagar(gracias);
            }}
          >
            Pagar
          </button>
        </div>
      );
      setPagar(detalles);
    }
  };

  const articulos = catalogo.map((articulo) => (
    <Tarjeta
      key={articulo.id}
      articulo={articulo}
      agregarAlCarrito={agregarAlCarrito}
    />
  ));

  return (
    <>
      {pagar && <div className='contenedor-pagar'>{pagar}</div>}
      <div className='titulo'>Catálogo</div>
      <Carrito
        totalArticulos={carrito.length}
        totalProductos={productos.length}
        total={total}
        limpiarCarrito={limpiarCarrito}
        manejarPago={manejarPago}
      />
      <div className='tarjetas'>{articulos}</div>
    </>
  );
};
