import React from "react";
import "../hojas-de-estilos/Contador.css";


function Contador({ numClick }) {
    return(
        <div className="contador">
            {numClick}
        </div>
    );
}

export default Contador;