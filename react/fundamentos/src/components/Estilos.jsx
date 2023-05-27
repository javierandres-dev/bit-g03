import './Estilos.css';

export const Estilos = () => {
  const reglasEstilos = {
    color: 'blue',
    fontSize: '20px',
  };
  return (
    <>
      <div>Estilos</div>
      <div className='txtVerde'>Lorem ipsum dolor sit.</div>
      <div style={reglasEstilos}>Lorem ipsum dolor sit.</div>
    </>
  );
};
