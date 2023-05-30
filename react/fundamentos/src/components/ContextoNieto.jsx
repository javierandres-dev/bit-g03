import useUserContext from '../hooks/useUserContext';

export const ContextoNieto = () => {
  const usuario = useUserContext();
  console.log('desde nieto:', usuario);
  return (
    <>
      <div>ContextoNieto</div>
      <div>Hola, {usuario.nombre}</div>
    </>
  );
};
