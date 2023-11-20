import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ComponenteINFO.css";
import imagenPerfil from "../../resources/imagenPerfil.png";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const ComponenteINFO = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "Nombre",
    email: "email@example",
    telefono: "12345678",
    region: "Vivo en...",
    contraseña: "********",
    situacionLaboral: "Me encuentro...", 
  });
//estado de region----------------------------------------------
  const [region, setRegion] = useState("Vivo en...");
//--------------------------------------------------------------------------------------------

//estado de region----------------------------------------------
const [situacionLaboral, setSituacionLaboral] = useState("Me encuentro...");
//--------------------------------------------------------------------------------------------


  const togglePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setDatosUsuario({
      ...datosUsuario,
      [name]: value,
    });
  };

  const obtenerDatosUsuario = async () => {
    try {
      const consultaCookie = Cookies.get("token");
  
      if (consultaCookie) {
        const tokedDecode = jwtDecode(consultaCookie);
        const idToken = tokedDecode.data._id;
        console.log(idToken);
  
        if (idToken) {
          const response = await axios.get(`http://localhost:3000/api/v1/user/${idToken}`);

          
          // Obtener la imagen como un objeto URL si está presente en la respuesta
          if (response.data.imagen) {
            const imagenUrl = bufferToDataURL(response.data.imagen, 'image/jpeg'); // Reemplaza 'image/jpeg' con el tipo MIME correcto
            setImagenPerfilSrc(imagenUrl);
          }
  
          // Configurar los datos del usuario, incluyendo la imagen y otros campos
          setDatosUsuario(response.data);
          console.log(datosUsuario)
        } else {
          console.warn("No hay un usuario autenticado");
        }
      } else {
        console.warn("No hay una cookie de token");
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };
  
  

  useEffect(() => {
    obtenerDatosUsuario();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const consultaCookie = Cookies.get("token");
  
      if (consultaCookie) {
        const tokedDecode = jwtDecode(consultaCookie);
        const idToken = tokedDecode.data._id;
  
        if (idToken) {
          const formData = new FormData(); // Crear objeto FormData
  
          // Agregar campos de texto al FormData
          formData.append("nombre", datosUsuario.nombre);
          formData.append("email", datosUsuario.email);
          formData.append("telefono", datosUsuario.telefono);
          formData.append("contraseña", datosUsuario.contraseña);
          formData.append("region", datosUsuario.region);
          formData.append("situacionLaboral", datosUsuario.situacionLaboral);
          
          // ... otros campos
  
          if (datosUsuario.imagen) {
            formData.append("imagen", datosUsuario.imagen); // Agregar la imagen al FormData
          }
  
          const response = await axios.patch(
            `http://localhost:3000/api/v1/user/${idToken}`,
            formData, // Enviar el FormData en lugar de datosUsuario
            {
              headers: {
                "Content-Type": "multipart/form-data", // Asegúrate de establecer el tipo de contenido correcto para FormData
              },
            }
          );
          setDatosUsuario(response.data);
          console.log("Datos actualizados exitosamente");
        } else {
          console.warn("No hay un usuario autenticado");
        }
      } else {
        console.warn("No hay una cookie de token");
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };
  console.log(datosUsuario)
  //Inicio de getsion imagen-----------------------------------------------------------------
  const [imagenPerfilSrc, setImagenPerfilSrc] = useState(imagenPerfil);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImagenPerfilSrc(reader.result); // Actualizamos la imagen en el frontend
  
        // Actualizamos el estado para incluir la imagen seleccionada
        setDatosUsuario({
          ...datosUsuario,
          imagen: file, // Esto podría ser diferente dependiendo de la estructura de datos que espera el backend para la imagen
        });
      };
  
      reader.readAsDataURL(file);
    }
  };

  //---------------------------------------------------------------------------
  const bufferToDataURL = (buffer, mimeType) => {
    const arrayBufferView = new Uint8Array(buffer.data); // Extrae la propiedad data
    const blob = new Blob([arrayBufferView], { type: mimeType });
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  };
  
  return (
    <main className="containercomponenteINFO">
      <section className="row">
        <img src={imagenPerfilSrc} alt="imagendePerfil" className="imagenPerfil" />
        <div className="input-group mb-3">
          <label className="input-group-text">
            Subir
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            onChange={handleFileChange}
          />
        </div>
      </section>
      <section className="row">
        <h2 className="subtituloDatosPersonales"> Datos Personales</h2>
        <form
          onSubmit={handleSubmit}
          className="row g-3 needs-validation"
          noValidate
        >
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className="form-label subtituloChiqui">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip01"
              name="nombre"
              value={datosUsuario.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip02" className="form-label subtituloChiqui">
              Rut
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip02"
              name="rut"
              value={datosUsuario.rut}
              readOnly //Hace que sólo sea de lectura
            />
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltipUsername" className="form-label subtituloChiqui">
              Email
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                name="email"
                value={datosUsuario.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="validationTooltip03" className="form-label subtituloChiqui">
              Teléfono
            </label>
            <input
              type="tel" // el tipo tipo "tel" sirve para admitir solo números
              className="form-control"
              id="validationTooltip03"
              name="telefono"
              value={datosUsuario.telefono || ""}
              onChange={handleInputChange}
              pattern="[0-9]{8}" //Esta linea indica que se pueden ingresar numeros del 0 al 9, y acepta 8 digitos ni mas ni menos
              required
            />
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="validationTooltip06" className="form-label subtituloChiqui">
              Región
            </label>
            <select
              className="form-select"
              id="validationTooltip10"
              name="region"
              value={datosUsuario.region}
              onChange={handleInputChange}
              required
            >
            
              <option value="Región de Arica y Parinacota">
                R. de Arica y Parinacota
              </option>
              <option value="Región de Tarapacá">R. de Tarapacá</option>
              <option value="Región de Antofagasta">R. de Antofagasta</option>
              <option value="Región de Atacama">R. de Atacama</option>
              <option value="Región de Coquimbo">R. de Coquimbo</option>
              <option value="Región de Valparaíso">R. de Valparaíso</option>
              <option value="Región de O'Higgins">R. de O'Higgins</option>
              <option value="Región del Maule">R. del Maule</option>
              <option value="Región del Ñuble">R. del Ñuble</option>
              <option value="Región del Biobío">R. del Biobío</option>
              <option value="Región de La Araucanía">
                Re. de La Araucanía
              </option>
              <option value="Región de Los Ríos">R. de Los Ríos</option>
              <option value="Región de Los Lagos">R. de Los Lagos</option>
              <option value="Región de Aysén">R. de Aysén</option>
              <option value="Región de Magallanes">R. de Magallanes</option>
              <option value="Región Metropolitana">R. Metropolitana</option>
            </select>
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="validationTooltip05" className="form-label subtituloChiqui">
              Contraseña
            </label>
            <input
              type={passwordHidden ? "password" : "text"}
              className="form-control"
              id="validationTooltip05"
              name="contraseña"
              value={datosUsuario.contraseña || ""}
              onChange={handleInputChange}
              required
            />
            <div
              className="password-toggleLuisPerfil"
              onClick={togglePasswordVisibility}
            >
              {" "}
            </div>
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="validationTooltip09" className="form-label subtituloChiqui">
              Sit. Laboral
            </label>
            <select
              className="form-select"
              id="validationTooltip07"
              name="situacionLaboral"
              value={datosUsuario.situacionLaboral}
              onChange={handleInputChange}
              required
            >
         
              <option value="Independiente">Independiente</option>
              <option value="Cesante">Cesante</option>
              <option value="Empleado">Empleado</option>
            </select>
          </div>
          <div className="col-12">
            <button className="btn botonComponenteInfo" type="submit">
              Actualizar Datos
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};