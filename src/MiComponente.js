// Importamos los modulos de react / dependencias
import React from "react";

// Función del componente
const MiComponente = () => {

    let usuario = {
        nombre: "Carlos",
        apellidos: "García de Marina",
        web: "carlosdev.es"
    };

    return (
        <div> 
            <hr/>
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>
                    Nombre: <b>{usuario.nombre}</b>
                </li>
                <li>
                    Apellidos: <b>{usuario.apellidos}</b>
                </li>
                <li>
                    Web: <b>{usuario.web}</b>
                </li>

            </ul>
            <p>Este es mi primer componente</p>
            <ul>
            <li>
                React
            </li>                
            <li>
                Angular
            </li>                
            <li>
                Vue
            </li>
            </ul>
        </div>
    );
}

// Export
export default MiComponente;