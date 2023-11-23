import React, { useState } from 'react';
import './ComponenteINFO.css';
import imagenPerfil from "../../resources/imagenPerfil.png";

export const ComponenteINFO = () => {
  // Estado para manejar los valores de los campos del formulario
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: 'NombreUsuario',
    rut: 'xx.xxx.xxx-x',
    email: 'ejemplo@ejemplo.cl',
    telefono: '12345678',
    region: '',
    contraseña: '',
    situacionLaboral: '',
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosUsuario({
      ...datosUsuario,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Agregar lógica para enviar datos actualizados al servidor, si es necesario
  };
  
  return (

    <main className='containercomponenteINFO'>
      <section className='row'>
        <img src={imagenPerfil} alt="imagendePerfil" className="imagenPerfil" />
        <div className="input-group mb-3">
          <label className="input-group-text" /*for="inputGroupFile01"*/>Subir</label>
          <input type="file" className="form-control" id="inputGroupFile01" />
        </div>
      </section>
      <section className='row'>
        <h2 className='subtituloDatosPersonales'> Datos Personales</h2>
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-4 position-relative">
            <label for="validationTooltip01" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="validationTooltip01" value="NombreUsuario" required/>
              
          </div>
          <div className="col-md-4 position-relative">
            <label for="validationTooltip02" className="form-label">Rut</label>
            <input type="text" className="form-control" id="validationTooltip02" value="xx.xxx.xxx-x" required/>
              
          </div>
          <div className="col-md-4 position-relative">
            <label for="validationTooltipUsername" class="form-label">Email</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" placeholder="ejemplo@ejemplo.cl"required/>
                
            </div>
          </div>
          <div className="col-md-3 position-relative">
            <label for="validationTooltip03" className="form-label">Teléfono</label>
            <input type="text" className="form-control" id="validationTooltip03" value="12345678" required/>
              <div className="invalid-tooltip">
                Por favor selecciona un telefono válido.
              </div>
          </div>
          <div className="col-md-3 position-relative">
            <label for="validationTooltip04" className="form-label">Región</label>
            <select className="form-select" id="validationTooltip04" required>
              <option selected disabled value="">Vivo...</option>              
              <option>Región de Arica y Parinacota</option>
              <option>Región de Tarapacá</option>
              <option>Región de Antofagasta</option>
              <option>Región de Atacama</option>
              <option>Región de Coquimbo</option>
              <option>Región de Valparaíso</option>
              <option>Región de O'Higgins</option>
              <option>Región del Maule</option>
              <option>Región del Ñuble</option>
              <option>Región del Biobío</option>
              <option>Región de La Araucanía</option>
              <option>Región de Los Ríos</option>
              <option>Región de Los Lagos</option>
              <option>Región de Aysén</option>
              <option>Región de Magallanes</option>
              <option>Región Metropolitana</option>
            </select>
            <div className="invalid-tooltip">
              Por favo selecciona la región.
            </div>
          </div>
          <div className="col-md-3 position-relative">
            <label for="validationTooltip05" className="form-label">Contraseña</label>
            <input type="text" className="form-control" id="validationTooltip05" required/>
              <div className="invalid-tooltip">
                Por favor, selecciona una contraseña correcta.
              </div>
          </div>
          <div className="col-md-3 position-relative">
            <label for="validationTooltip04" className="form-label">Sit. Laboral</label>
            <select className="form-select" id="validationTooltip04" required>
              <option selected disabled value="">Estoy...</option>              
              <option>Trabajando</option>
              <option>Cesante</option>
            </select>
            <div className="invalid-tooltip">
              Por favo selecciona una situación laboral.
            </div>
          </div>
          <div className="col-12">
            <button className="btn botonComponenteInfo" type="submit">Actualizar Datos</button>
          </div>
        </form>
      </section>

    </main>
  );
};

