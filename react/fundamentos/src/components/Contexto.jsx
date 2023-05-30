import UserContext from '../context/UserContex';
import { ContextoPadre } from './ContextoPadre';

export const Contexto = () => {
  return (
    <UserContext.Provider
      value={{
        id: 0,
        nombre: 'pepita',
        apellido: 'pérez',
      }}
    >
      <div>Contexto</div>
      <ContextoPadre />
    </UserContext.Provider>
  );
};
