export const Arreglos = () => {
  const arreglo = ['elemento1', 'elemento2', 'elemento1', 'elemento4'];
  const arregloObjetos = [
    { id: 1, nombre: 'A' },
    { id: 2, nombre: 'B' },
    { id: 3, nombre: 'C' },
    { id: 4, nombre: 'D' },
  ];

  const elementos = arreglo.map((elemento, indice) => {
    return <li key={indice}>{elemento}</li>;
  });

  const objetos = arregloObjetos.map((objeto) => {
    return <li key={objeto.id}>{objeto.nombre}</li>;
  });

  return (
    <>
      <div>Arreglos</div>
      <ol>{elementos}</ol>
      <ul>{objetos}</ul>
    </>
  );
};
