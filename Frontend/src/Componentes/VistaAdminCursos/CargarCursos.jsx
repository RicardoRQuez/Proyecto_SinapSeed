import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./CargarCursos.css";

export const CargarCursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const obtenerCursos = async () => {
      try {
        const consultaCookie = Cookies.get("token");
        console.log(consultaCookie);

        const respuesta = await fetch("http://localhost:3000/api/v1/curso", {
          headers: { token: consultaCookie },
        });
        const datos = await respuesta.json();
        console.log(datos);
        setCursos(datos);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerCursos();
  }, []);

  const handleEliminarCurso = async (id) => {
    try {
      // Realiza la solicitud para eliminar el curso por su ID
      await fetch(`http://localhost:3000/api/v1/curso/${id}`, {
        method: 'DELETE',
      });

      // Actualiza la lista de cursos después de eliminar
      const nuevosCursos = cursos.filter((curso) => curso._id !== id);
      setCursos(nuevosCursos);
    } catch (error) {
      console.error('Error al eliminar curso:', error);
    }
  };



  return (
<>
  <div className="container-flex antiNavBar"></div>
  <h2 className="cursosSinapSeed">Cursos SinapSeed</h2>
  <main className="container-fluid tablite">

  <Link to={"/agregar-curso"} className="btn btn-info" botoncito>Agregar curso</Link>

    <table className="table table-striped tableCurso">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Resumen</th>
          <th>Imagen</th>
          <th>Horario</th>
          <th>Editar</th>
          <th>Eliminar</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cursos.map((curso) => (
          <tr key={curso._id}>
            <th scope="row">{curso._id}</th>
            <td>{curso.titulo}</td>
            <td>{curso.descripcion}</td>
            <td>{curso.resumen}</td>
            <td>{curso.horario}</td>

            <td></td>
            <td>
  <Link to={`/editar-curso/${curso._id}`} className="btn btn-info">Editar</Link>
</td>
<td>
<button onClick={() => handleEliminarCurso(curso._id)} className='botonElimias'>
    Eliminar
  </button>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
</>
  );
};