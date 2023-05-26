export default function ComponenteCondicional() {
  let salida = null;
  if (true) {
    salida = <ComponenteInterno1 />;
  } else {
    salida = <ComponenteInterno2 />;
  }
  return <div>{salida}</div>;
}

const ComponenteInterno1 = () => {
  return (
    <>
      <div>Componente Interno 1</div>
      <div>Componente Condicional - TRUE</div>
    </>
  );
};

const ComponenteInterno2 = () => {
  return (
    <>
      <div>Componente Interno 2</div>
      <div>Componente Condicional - FALSE</div>
    </>
  );
};
