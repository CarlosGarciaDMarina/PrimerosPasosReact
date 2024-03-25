import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];

  return (
    <div>
        <h2>Listado de libros</h2>
        {/* Condicionales en REACT */}
        {libros.length >= 1 ? (
                // Si se cumple la condicion hace esto
                <ul>
                    {
                        /* Utilizamos el map porque te permite acceder a los indices de los elementos y en jsx es mejor */
                        libros.map((libro, indice) => {
                            /* Utilizamos la key para que cada elemento tenga un indice y asi no devuelva errores */
                            return <li key={indice}>{libro}</li>
                        })
                    }
                </ul>
            )
            : (
                <p>No hay libros para mostrar</p>
            )
        }

    </div>
  );
}
