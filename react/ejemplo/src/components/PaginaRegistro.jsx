import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PaginaRegistro = ({ setLogueado }) => {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: null,
    correo: null,
    contrasena: null,
  });

  const navigate = useNavigate();

  const manejarEntrada = (evento) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [evento.target.name]: evento.target.value,
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (
      !nuevoUsuario.nombre ||
      !nuevoUsuario.correo ||
      !nuevoUsuario.contrasena
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    localStorage.setItem('backend', JSON.stringify(nuevoUsuario));
    localStorage.setItem(
      'token',
      JSON.stringify({ name: nuevoUsuario.nombre })
    );
    setLogueado(true);
    navigate('/privado');
  };

  return (
    <div>
      <form className='formulario' onSubmit={manejarEnvio}>
        <input
          type='text'
          placeholder='Nombre'
          onInput={manejarEntrada}
          name='nombre'
        />
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
        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
};
