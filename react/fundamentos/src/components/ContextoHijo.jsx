import { ContextoNieto } from './ContextoNieto';

export const ContextoHijo = () => {
  return (
    <>
      <div>ContextoHijo</div>
      <ContextoNieto />
    </>
  );
};
