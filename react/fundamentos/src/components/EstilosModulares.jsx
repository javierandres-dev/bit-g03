import estilos from './estilos.module.css';
export const EstilosModulares = () => {
  return (
    <>
      <div>Estilos Modulares</div>
      <div className={estilos.purpura}>Lorem ipsum dolor sit.</div>
      <div className={estilos.marron}>
        Lorem ipsum dolor sit amet consectetur.
      </div>
    </>
  );
};
