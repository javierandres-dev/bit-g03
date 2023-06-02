const urlApiExternaUsuarios = 'https://jsonplaceholder.typicode.com/users';

export const ApiExterna = () => {
  const obtenerUsuariosFetch = () => {
    fetch(urlApiExternaUsuarios)
      .then((respuesta) => respuesta.json())
      .then((objeto) => console.log('desde then:', objeto))
      .catch((error) => console.log('desde catch:', error));
  };

  //obtenerUsuariosFetch();

  const obtenerUsuariosAsync = async () => {
    const respuesta = await fetch(urlApiExternaUsuarios);
    const objeto = await respuesta.json();
    console.log({ objeto });
  };

  //obtenerUsuariosAsync();

  return (
    <>
      <div>ApiExterna</div>
      <button onClick={obtenerUsuariosFetch}>Obtener usuarios - Fetch</button>
      <button onClick={obtenerUsuariosAsync}>Obtener usuarios - Async</button>
    </>
  );
};
