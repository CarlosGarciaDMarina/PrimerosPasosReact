import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = ({nombre, apellidos, ficha}) => {

  
    return (
    <div>

        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>
                {nombre}
            </li>
            <li>
                {apellidos}
            </li>
            <li>
                {ficha.estado}
            </li>
            <li>
                {ficha.altura}
            </li>
        </ul>

    </div>
  );
}

TercerComponente.propTypes = {
    /* siempre para validar el propTypes en tu componente en estos casos la primera letra es en minusculas */

    // Para saber que PropTypes puedes validar busca en la documentacion de React (google > propotypes React > docu react)
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}
