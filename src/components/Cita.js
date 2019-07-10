import React from 'react';

const Cita = ({cita, eliminarCita}) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{cita.mascota}</h3>
      <p className="card-text"><span>Nombre Dueño: </span>{cita.propietario}</p>
      <p className="card-text"><span>Fecha: </span>{cita.fecha}</p>
      <p className="card-text"><span>Hora: </span>{cita.hora}</p>
      <p className="card-text"><span>Síntomas: </span></p>
      <p className="card-text">{cita.sintomas}</p>

      <button
        className="btn btn-danger"
        /*
          Si se hace de esta manera onClick={eliminarCita(cita.id)}
          la funcion se ejecutara sin que suceda el evento. Esto se debe
          a la sintaxis de los parentesis que son la llamada a una
          funcion en JavaScript. Para poder pasar el parametro que necesita
          se hará con la arrow function como sigue:
        */
        onClick={() => eliminarCita(cita.id)}
      >Borrar &times;</button>
    </div>
  </div>
);

export default Cita;