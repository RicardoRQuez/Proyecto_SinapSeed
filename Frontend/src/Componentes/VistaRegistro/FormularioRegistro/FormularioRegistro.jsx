import React from "react";
import styles from "./FormularioRegistro.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const FormularioRegistro = () => {
  return (
    <>
      <form>
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
              />
            </div>
            <div>
              <label className={`${styles.colorLabel} form-label`}>Rut:</label>
              <input
                className={`${styles.rut} ${styles.color} formulario-columna`}
                type="text"
                placeholder="Ingrese su Rut"
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
              />
            </div>
            <div>
              <label className={`${styles.colorLabel} form-label`}>
                Teléfono:
              </label>
              <input
                className={`${styles.telefono} ${styles.color} formulario-columna`}
                type="tel"
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <label className={`${styles.colorLabel} form-label`}>
                Comuna:
              </label>
              <input
                className={`${styles.comuna} ${styles.color} formulario-columna`}
                type="text"
                placeholder="Ingrese su comuna"
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
