import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Navegacion = ({ logueado, setLogueado }) => {
  let salida = null;
  const navigate = useNavigate();

  const manejarCerrarSesion = () => {
    localStorage.removeItem('token');
    setLogueado(false);
    navigate('/iniciar-sesion');
  };

  if (logueado) {
    salida = (
      <>
        <Link to='/privado'>Privado</Link>
        <button onClick={manejarCerrarSesion}>Cerrar sesión</button>
      </>
    );
  } else {
    salida = (
      <>
        <Link to='/iniciar-sesion'>Iniciar sesión</Link>
        <Link to='/registro'>Registrase</Link>
      </>
    );
  }

  return (
    <div className='navegacion'>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/servicios'>Servicios</Link>
        <Link to='/productos'>Productos</Link>
        <Link to='/acerca-de'>Acerca de</Link>
        <Link to='/contacto'>Contacto</Link>
      </nav>
      <nav>{salida}</nav>
    </div>
  );
};
