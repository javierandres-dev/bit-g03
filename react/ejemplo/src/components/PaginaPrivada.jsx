import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tarjetas } from './Tarjetas';
import { catalogo } from '../utils/catalogo';

export const PaginaPrivada = () => {
  const [nombre, setNombre] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      setNombre(token.name);
    } else {
      navigate('/iniciar-sesion');
    }
  }, []);

  return (
    <>
      <div>Pagina privada</div>
      <div>Hola, {nombre}!</div>
      <hr />
      <Tarjetas catalogo={catalogo} />
    </>
  );
};
