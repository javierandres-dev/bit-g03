import useUserContext from '../hooks/useUserContext';
import { ContextoHijo } from './ContextoHijo';

export const ContextoPadre = () => {
  const usuario = useUserContext();
  console.log('desde padre:', usuario);
  return (
    <>
      <div>ContextoPadre</div>
      <ContextoHijo />
    </>
  );
};
