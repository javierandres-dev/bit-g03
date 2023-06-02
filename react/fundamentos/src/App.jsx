import 'bootstrap/dist/css/bootstrap.min.css';
//import { ComponenteDeClase } from './components/ComponenteDeClase';
//import { ComponenteFuncional } from './components/ComponenteFuncional';
//import ComponenteCondicional from './components/ComponenteCondicional';
//import { Fragmento } from './components/Fragmento';
//import { Arreglos } from './components/Arreglos';
//import { ManejoDeEventos } from './components/ManejoDeEventos';
//import { Props } from './components/Props';
//import { PropsChildren } from './components/PropsChildren';
//import { Estilos } from './components/Estilos';
//import { EstilosModulares } from './components/EstilosModulares';
//import { EstilosBootstrap } from './components/EstilosBootstrap';
//import { Estado } from './components/Estado';
//import { CicloDeVida } from './components/CicloDeVida';
//import { Contexto } from './components/Contexto';
//import { Referencia } from './components/Referencia';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import { Contacto } from './Pages/Contacto';
import { ApiExterna } from './components/ApiExterna';

export function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Inicio</Link>
        <br />
        <Link to='/contacto'>Contacto</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <hr />
      <ApiExterna />
    </BrowserRouter>
  );
}
/*
<Referencia />
<Contexto />
<CicloDeVida />
<Estado />
<EstilosBootstrap />
<EstilosModulares />
<Estilos />
<PropsChildren>
  <div>1...</div>
  <div>n...</div>
</PropsChildren>
<Props nombre='Pepita' />
<ManejoDeEventos />
<Arreglos />
<Fragmento />
<ComponenteCondicional />
<ComponenteFuncional />
<ComponenteDeClase />
*/
