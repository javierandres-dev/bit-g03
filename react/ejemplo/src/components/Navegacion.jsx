import { Link } from 'react-router-dom';

export const Navegacion = () => {
  return (
    <nav className='navegacion'>
      <Link to='/'>Inicio</Link>
      <Link to='/servicios'>Servicios</Link>
      <Link to='/productos'>Productos</Link>
      <Link to='/acerca-de'>Acerca de</Link>
      <Link to='/contacto'>Contacto</Link>
      <Link to='/registro'>Registrase</Link>
    </nav>
  );
};
