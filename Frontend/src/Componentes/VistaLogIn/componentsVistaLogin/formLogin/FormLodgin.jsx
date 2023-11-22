import React, { useState } from "react";
import "./formLogin.css";
import { useAuth, useAuthFunctions  } from "../../AuthContext";
import { useNavigate, Link } from 'react-router-dom';

export const FormLogin = ({ onLogin, onClose  }) => {
  const navigate = useNavigate();

  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useAuth();
  const { handleLogin } = useAuthFunctions();

  const [passwordHidden, setPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordHidden ? "text" : "password";
  };
  

  const handleButtonClick = async (e) => {
    e.preventDefault();
    await handleLogin(e);
    onClose();
    navigate('/'); // Redirige a la ruta '/' después de iniciar sesión
  };



  

  return (
    <form className="formLuis container">
      <section className="input-container col-12">
        <h2 className="titulo2Luis">
          Ingreso <span className="alumnosLuis"> Alumnos</span>
        </h2>
      </section>
      <section className="input-container row contenedorLuisEspacio">
        <label
          htmlFor="username"
          className="label-textLuis"
          style={{ textAlign: "left" }}
        >
          Ingresa tu correo electrónico
        </label>
        <input
          type="text"
          id="username"
          className="espacioLuis"
          name="username"
          placeholder="Ingresa tu correo acá."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </section>
      <section className="input-container row contenedorLuisEspacio">
  <label htmlFor="password" className="label-textLuis">
    Clave
  </label>
  <div className="input-with-icon">
    <input
      type={passwordHidden ? "password" : "text"}
      id="password"
      className="espacioLuis"
      name="password"
      placeholder="Ingresa tu clave acá."
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <div className="password-toggleLuis" onClick={togglePasswordVisibility}></div>
  </div>
</section>
      <Link to="/forgot">
        <p id="parrafoLuis" onClick={onClose}>
          ¿No te acuerdas de tu <span id="claveLuis">clave</span>?
        </p>
      </Link>
      <section className="container row contenedorBotonLuis">
        <button
          type="submit"
          className="botonLuis"
          onClick={handleButtonClick }
          
          
        >
          <span className="ingresarLuis" >Ingresar</span>
        </button>
      </section>
      <hr className="separadorLuis" />
      <section>
        <h5 className="accesoDocenteLuis">
          {" "}
          Registrate <Link to="/registro" id="docenteLuis" onClick={onClose}>Aqui</Link>{" "}
        </h5>
      </section>
    </form>
  );
};