import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export const TablaAdminCursos = () => {

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const obtenerCursos = async () => {
      try {
        const consultaCookie = Cookies.get('token');
        console.log(consultaCookie);
  
        const respuesta = await fetch('http://localhost:3000/api/v1/curso', { headers: { token: consultaCookie } });
        const datos = await respuesta.json();
        console.log(datos); // Agrega esto para verificar los datos
        setCursos(datos);
      } catch (error) {
        console.error('Error al obtener cursos:', error);
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
      <div className='container-flex antiNavbar'>.</div>

      <h2 className='usersaa'>Cursos SinapSeed</h2>
      <main className='container-fluid asdasd'> 
        <table className="table dasdasdad">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha de Inicio</th>
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
                <td>
                  <Link to={`/editar-curso/${curso._id}`} className='botonEdas'>
                    Editar
                  </Link>
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