export const ManejoDeEventos = () => {
  const manejarSubmit = (evento) => {
    evento.preventDefault();
    console.log('manejando submit...');
  };

  const manejarClick = () => {
    console.log('manejando click...');
  };

  const manejarChange = (evento) => {
    console.log('manejando change...');
    console.log('valor:', evento.target.value);
  };

  return (
    <>
      <div>Manejo De Eventos</div>
      <form onSubmit={manejarSubmit}>
        <input type='text' placeholder='Entrada...' onChange={manejarChange} />
        <button type='button' onClick={manejarClick}>
          Otro botón
        </button>
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
};
