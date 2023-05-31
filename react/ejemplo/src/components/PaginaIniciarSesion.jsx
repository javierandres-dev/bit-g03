import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PaginaIniciarSesion = ({ setLogueado }) => {
  const [back, setBack] = useState(null);
  const [nuevaSesion, setNuevaSesion] = useState({
    correo: null,
    contrasena: null,
  });

  useEffect(() => {
    const backend = JSON.parse(localStorage.getItem('backend'));
    if (backend) {
      setBack(backend);
    }
  }, []);

  const navigate = useNavigate();

  const manejarEntrada = (evento) => {
    setNuevaSesion({
      ...nuevaSesion,
      [evento.target.name]: evento.target.value,
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (!nuevaSesion.correo || !nuevaSesion.contrasena) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const esValido =
      nuevaSesion.correo === back.correo &&
      nuevaSesion.contrasena === back.contrasena;

    if (esValido) {
      localStorage.setItem('token', JSON.stringify({ name: back.nombre }));
      setLogueado(true);
      navigate('/privado');
    } else {
      alert('Correo y/o contraseña incorrecta');
    }
  };

  const salida = back ? (
    <div>
      <form className='formulario' onSubmit={manejarEnvio}>
        <input
          type='email'
          placeholder='Correo'
          onInput={manejarEntrada}
          name='correo'
        />
        <input
          type='password'
          placeholder='Contraseña'
          onInput={manejarEntrada}
          name='contrasena'
        />
        <button type='submit'>Iniciar sesión</button>
      </form>
    </div>
  ) : (
    <div>Para iniciar sesión primero debe registrarse.</div>
  );

  return <>{salida}</>;
};
