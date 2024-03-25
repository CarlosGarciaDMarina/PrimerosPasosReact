import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: "175cm",
    grupo: "0-",
    estado: "Bueno",
    alergias: "Polen"

  }

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Empezamos el master en React
        </p>
        { /* Cargamos el componente */}

        <div className='componentes'>
          
        <MiComponente></MiComponente>
        <hr/>
        <SegundoComponente></SegundoComponente>
        <hr/>
        <TercerComponente 
          nombre="Carlos" 
          apellido="García de Marina"
          ficha={ficha_medica}
        ></TercerComponente>
        <hr/>
        <EventosComponente></EventosComponente>
        <hr/>



        </div>


      </header>
    </div>
  );
}

export default App;
