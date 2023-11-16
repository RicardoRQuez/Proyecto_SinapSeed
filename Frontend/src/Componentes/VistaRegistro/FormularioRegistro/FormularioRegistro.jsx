import React, {useState} from "react";
import styles from "./FormularioRegistro.module.css";
import axios from 'axios';


export const FormularioRegistro = () => {
  const initialState = {
    nombre: "",
    rut: "",
    email: "",
    telefono: "",
    region: "",
    password: "",
    confirmPassword: "",
    situacionLaboral: "",
  };

  const [formData, setFormData] = useState(initialState);
  
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      // Verifica que las contraseñas coincidan antes de enviar la solicitud
      if (formData.password !== formData.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      console.log("formData", formData)
      // Verificar existencia de Rut antes de enviar la solicitud
      const usuarioExistente = await verificarExistencia(formData);
      console.log("asas", usuarioExistente)
      // Manejar errores según la respuesta de verificarExistencia
      if (usuarioExistente) {
        alert("El Rut o email ya está registrado");
        return;
      }
  
      // Utiliza directamente el objeto formData en la solicitud POST
      await axios.post("http://localhost:3000/api/v1/signup", formData);
      setFormData(initialState);
  
      alert('Usuario creado correctamente');
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };    
  
  const verificarExistencia = async (usuarioData) => {
    console.log(usuarioData)
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/verificar`, usuarioData);

      return response.data.existeCampo;
    } catch (error) {
      console.log("aaaa")
      console.error("Error al verificar existencia:", error);
      return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <form onSubmit={handleSignup}>
        <div className={`${styles.formRegistro} formulario-container`}>
          <h1 className={styles.tituloForm}>Formulario de Registro</h1>
          <div className={`${styles.formColumna}`}>
            <div>
              <label className={`${styles.colorLabel} form-label`}>
                Nombre:
              </label>
              <input
                className={`${styles.nombre} ${styles.color} formulario-columna`}
                type="text"
                placeholder="Ingrese su nombre"
                name= "nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className={`${styles.colorLabel} form-label`}>Rut:</label>
              <input
                className={`${styles.rut} ${styles.color} formulario-columna`}
                type="text"
                placeholder="Ingrese su Rut"
                name= "rut"
                value={formData.rut}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={`${styles.formColumna}`}>
            
            <div >
              <label className={`${styles.colorLabel} form-label`}>
                Email:
              </label>
              <input
                className={`${styles.email} ${styles.color} formulario-columna`}
                type="email"
                placeholder="Correo electrónico"
                name= "email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className={`${styles.colorLabel} form-label`}>
                Teléfono:
              </label>
              <input
                className={`${styles.telefono} ${styles.color} formulario-columna`}
                type="tel"
                placeholder="Ingese su telefono"
                name= "telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className={`${styles.colorLabel} form-label`}>
                Región:
              </label>
              <input
                className={`${styles.region} ${styles.color} formulario-columna`}
                type="text"
                placeholder="Ingrese su región"
                name= "region"
                value={formData.region}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className={`${styles.colorLabel} form-label`}>
                Contraseña:
              </label>
              <input
                className={`${styles.contraseña} ${styles.color} formulario-columna`}
                type="password"
                placeholder="*********"
                name= "password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className={`${styles.colorLabel} form-label`}>
                Reingrese su Contraseña:
              </label>
              <input
                className={`${styles.contraseña} ${styles.color} formulario-columna`}
                type="password"
                placeholder="*********"
                name= "confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="situacionLaboral"
                className={`${styles.colorLabel} form-label`}
              >
                Situación laboral:
              </label>
              <select
                className={`${styles.inputSituacionLaboral} ${styles.color} form-control`}
                id="situacionLaboral"
                name= "situacionLaboral"
                value={formData.situacionLaboral}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled >
                  Selecciona una opción
                </option>
                <option value="independiente">Independiente</option>
                <option value="cesante">Cesante</option>
                <option value="empleado">Empleado</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className={`${styles.boton} ${styles.color} btn btn-light mt-3 `}
          >
            Regístrate!
          </button>
        </div>
      </form>
    </>
  );
};
