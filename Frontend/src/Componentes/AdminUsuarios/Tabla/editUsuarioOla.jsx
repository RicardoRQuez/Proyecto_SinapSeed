import React, { useState, useEffect } from 'react';
import { useParams, useNavigate   } from 'react-router-dom';
import './editUsuarios.css'

export const EditUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    region: '',
    situacionLaboral: '',
  });

  useEffect(() => {
    const obtenerDetallesUsuario = async () => {
      try {
        const respuesta = await fetch(`http://localhost:3000/api/v1/user/${id}`);
        const datos = await respuesta.json();
        setUsuario(datos);
      } catch (error) {
        console.error('Error al obtener detalles del usuario:', error);
      }
    };

    obtenerDetallesUsuario();
  }, [id]);

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuardar = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3000/api/v1/user/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
  
      // Asumiendo que la respuesta contiene los datos actualizados del usuario
      const datosActualizados = await respuesta.json();
  
      // Actualizamos el estado local del usuario con los datos actualizados
      setUsuario(datosActualizados);
  
      // Puedes realizar otras acciones después de la actualización, si es necesario
  
      navigate('/administrar-usuarios');
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
  }
};
  return (
    
    <div>
      <div className='container-flex antiNavbar'>.</div>
      <h2 className='tirarAbajo'>Editar Usuario</h2>
      
      <form>

      <div className="container alMedio">
  <div className="row alMedio ">
    <div className="col-3 izquierda">
    <label>Nombre:</label>
    </div>
    <div className="col-3 izquierda">
    <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} />
    </div>
  </div>
  <div className="row alMedio">
    <div className="col-3 izquierda">
    <label>RUT:</label>
    </div>
    <div className="col-3 izquierda">
    <input type="text" 
            name="rut" value={usuario.rut} onChange={handleChange} />
    </div>
  </div>
  <div className="row alMedio">
    <div className="col-3 izquierda">
    <label>Email:</label>
    </div>
    <div className="col-3 izquierda">
    <input type="text" name="email" value={usuario.email} onChange={handleChange} />
    </div>
  </div>
  <div className="row alMedio">
    <div className="col-3 izquierda">
   
    <label>Teléfono:</label>
    </div>
    <div className="col-3 izquierda">
    <input type="text" name="telefono" value={usuario.telefono} onChange={handleChange} />
    </div>
  </div>
  <div className="row alMedio">
    <div className="col-3 izquierda">
    <label>Región:</label>
    </div>
    <div className="col-3 izquierda">
    <input type="text" name="region" value={usuario.region} onChange={handleChange} />
    </div>
  </div>
  <div className="row alMedio">
    <div className="col-3 izquierda">
    <label>Situación Laboral:</label>
    </div>
    <div className="col-3 izquierda">
    <input type="text" name="situacionLaboral" value={usuario.situacionLaboral} onChange={handleChange} />
    </div>
  </div>
  <div className="row alMedio">
  <div className="col-3 izquierda">
    <label></label>
    </div>
    <div className="col-3 izquierda">
   
    <button type="button" onClick={handleGuardar}>
          Guardar
        </button>
    </div>

  </div>
</div>
       
      </form>
    </div>
  );
};

