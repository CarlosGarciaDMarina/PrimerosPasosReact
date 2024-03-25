import React from 'react';

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click en el botón, " + nombre);
    }

    function hasDadoDobleClick(e) {
        alert("Has dado doble click.");
    }

    const hasEntrado = (e, accion) => {
        alert( `Has ${accion} de la caja con el mouse!!`);
    }

    const estasDentro = e => {
        alert("Estas dentro del input, introduce tu nombre");
    }

    const estasFuera = e => {
        alert("Estas fuera del input, introduce tu nombre");
    }


  return (
    <div>
        <h1>Eventos en React</h1>
        {/* Evento click */}

        <p>
            <button onClick={e => hasDadoClick(e, "Carlos")}> Dame click !</button>
        </p>
        
        {/* Evento doble click */}

        <p>
            <button onDoubleClick={e => hasDadoDobleClick(e)}> Dame doble click !</button>
        </p>

        {/* Evento onMouseEnter or OnMouseLeave */}

        <div id ="caja" 
             onMouseEnter={e => hasEntrado(e, "entrado")}
             onMouseLeave={e => hasEntrado(e, "salido")}  
        >
            Pasa por encima
        </div>

        {/* Evento onBlur y onFocus */}

        <p>
            <input type="text" onFocus={ estasDentro } 
                                onBlur={ estasFuera } 
                                placeholder="Introduce tu nombre"/>
        </p>

    </div>
  )
}
