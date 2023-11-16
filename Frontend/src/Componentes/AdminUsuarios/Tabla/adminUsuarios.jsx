// Importa React y algunos hooks de React, así como estilos y un componente de enlace de react-router-dom.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './adminUsuarios.css';
import Cookies from 'js-cookie';

export const TablaAdminUsuarios = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {

        const consultaCookie = Cookies.get('token');
        console.log(consultaCookie);

        const respuesta = await fetch('http://localhost:3000/api/v1/user',  { headers: { token: consultaCookie } });
        const datos = await respuesta.json();
        setUsuarios(datos);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  const handleEliminarUsuario = async (id) => {
    try {
      // Realiza la solicitud para eliminar el usuario por su ID
      await fetch(`http://localhost:3000/api/v1/user/${id}`, {
        method: 'DELETE',
      });

      // Actualiza la lista de usuarios después de eliminar
      const nuevosUsuarios = usuarios.filter((usuario) => usuario._id !== id);
      setUsuarios(nuevosUsuarios);
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <> 
    <div className='container-flex antiNavbar'></div>

    <h2 className='usersSinapSeed'>Usuarios SinapSeed</h2>
    <main className='container-fluid tablita'> 
    <table className="table datosUsuarios">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>RUT</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Region</th>
          <th>Situacion Laboral</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario._id}>
            <th scope="row ">{usuario._id}</th>
            <td>{usuario.nombre}</td>
            <td>{usuario.rut}</td>
            <td>{usuario.email}</td>
            <td>{usuario.telefono}</td>
            <td>{usuario.region}</td>
            <td>{usuario.situacionLaboral}</td>
            <td>
            <Link to={`/editar-usuario/${usuario._id}`} className='botonEdit'>Editar</Link>
            </td>
            <td>
              <button onClick={() => handleEliminarUsuario(usuario._id)} className='botonEliminar'>
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

