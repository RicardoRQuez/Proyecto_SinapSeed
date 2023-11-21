import React, { useState } from "react";
import axios from "axios";
import "./MainBoxMain.css";

export const MainBoxMain = () => {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true); // Agrega el estado para la contraseña generada
  let emailResponse;
  //const userId = emailResponse.data.userId;


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const userData = { nombre, rut, email, telefono };
  
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/verificar-datos",
        userData
      );
      setGeneratedPassword(response.data.newPassword);
  
      try {
        const emailResponse = await axios.get(
          `http://localhost:3000/api/v1/obtener-id-usuario?email=${email}`
        );
  
        if (emailResponse && emailResponse.data && emailResponse.data.userId) {
          const userId = emailResponse.data.userId;
          console.log('userId:', userId);
          
          // Actualizar contraseña usando userId y generatedPassword
          await actualizarContrasenaEnBackend(userId);
  
          // Aquí puedes manejar la respuesta del servidor después de actualizar la contraseña
        } else {
          console.error(
            "La respuesta de emailResponse no tiene la estructura esperada."
          );
          // Manejar el caso en el que emailResponse no tiene la estructura esperada
        }
      } catch (emailError) {
        console.error("Error al obtener ID de usuario:", emailError);
        // Manejar el error al obtener ID de usuario
      }
    } catch (error) {
      console.error("Error al verificar datos:", error.response.data);
      // Manejar el error al verificar datos
    } finally {
      setLoading(false);
    }
  };
  

  const actualizarContrasenaEnBackend = async (userId) => {
    try {
      console.log(userId)
      //let userId = userId
      const patchResponse = await axios.patch(
        `http://localhost:3000/api/v1/actualizar-contrasena/${userId}`,
        { nuevaContrasena: generatedPassword }
      );
  
      console.log("Contraseña actualizada:", patchResponse.data.mensaje);
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
    }
  };
  
  
  const togglePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };

  
  return (
    <>
      <section className="row md-12 colorBase">
        <h2 className="subtituloForgotForm">
          {" "}
          Pon acá tus <span className="spanFormForgot">Datos Personales</span>,
          para validarlos
        </h2>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-11">
            <form
              onSubmit={handleFormSubmit}
              className="row g-3 needs-validation"
              noValidate
            >
              <div className="col-md-6 position-relative">
                <label
                  htmlFor="validationTooltip01"
                  className="form-label subtituloChiqui"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip01"
                  placeholder="Exactamente cómo te registraste"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 position-relative">
                <label
                  htmlFor="validationTooltip02"
                  className="form-label subtituloChiqui"
                >
                  Rut
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip02"
                  placeholder="12345678-9"
                  name="rut"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </div>
              <div className="col-md-7 position-relative">
                <label
                  htmlFor="validationTooltipUsername"
                  className="form-label subtituloChiqui"
                >
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
                    placeholder="Ejemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-5 position-relative">
                <label
                  htmlFor="validationTooltip03"
                  className="form-label subtituloChiqui"
                >
                  Teléfono
                </label>
                <input
                  type="tel" // el tipo tipo "tel" sirve para admitir solo números
                  className="form-control"
                  id="validationTooltip03"
                  name="telefono"
                  value={telefono}
                  placeholder="12345678 - Sólo 8 n°"
                  onChange={(e) => setTelefono(e.target.value)}
                  pattern="[0-9]{8}" //Esta linea indica que se pueden ingresar numeros del 0 al 9, y acepta 8 digitos ni mas ni menos
                  required
                />
              </div>
              <div className="col-md-12 position-relative">
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleFormSubmit}
                  className="botonMainBoxMain"
                >
                  {loading ? "Verificando..." : "Verificar Datos"}
                </button>
                {generatedPassword && (
                  <div className="col-md-12 position-relative">
                    <label
                      htmlFor="generatedPassword"
                      className="form-label subtituloChiqui"
                    >
                      Contraseña Generada
                    </label>
                    <input
                      type={passwordHidden ? "password" : "text"}
                      className="form-control"
                      id="generatedPassword"
                      value={generatedPassword}
                      readOnly
                    />
                  </div>
                )}
              </div>
              <div className="mostrarContraseña" onClick={togglePasswordVisibility} role="button">
                ¿Mostrar contraseña?
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
