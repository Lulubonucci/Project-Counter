import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [numClick, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClick + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor"></div>
      <div className="contenedor-principal">
        <Contador numClick={numClick} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
