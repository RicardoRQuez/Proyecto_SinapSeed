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

  const eliminarCurso = (id) => {
    console.log(`Eliminar curso con ID: ${id}`);
  };

  const editarCurso = (id) => {
    console.log(`Editar curso con ID: ${id}`);
  };

  return (
<>
  <div className="container-fluid antiNavBar2"></div>
  <h5 className="cursesSinapSeed">Cursos SinapSeed</h5>
  <main className="container-fluid tablite">
    <table className="table table-striped tableCurso">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Resumen</th>
          <th>Imagen</th>
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
            <td></td>
            <td>
  <Link to={`/editar-curso/${curso._id}`} className="btn btn-info" botoncito>Editar</Link>
</td>
<td>
  <button onClick={() => handleEliminarUsuario(usuario._id)} className="botoncitoEliminar" botoncito>
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