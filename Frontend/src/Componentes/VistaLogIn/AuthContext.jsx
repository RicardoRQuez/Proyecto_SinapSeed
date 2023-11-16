// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const setEmailValue = (value) => {
    setEmail(value);
  };

  const setPasswordValue = (value) => {
    setPassword(value);
  };

  const setIsAdminValue = (value) => {
    setIsAdmin(value);
  };
  
  const onLogin = () => {
    setAuthenticated(true);
    console.log("Usuario inició sesión");
  };
    const onLogout = () => {
    // Limpiar el token
    Cookies.remove("token");

    // Limpiar otros estados si es necesario
    setAuthenticated(false);
    setIsAdmin(false);
    setEmail("");
    setPassword("");
    setLoginSuccess(false);


    // Redirigir al usuario, por ejemplo, a la página de inicio
  };

  const handleLogin = async (event) => {
    event.preventDefault(); //Para que no se reinicie el formulario

    console.log("Iniciando sesión con", email, password);

    try {
      //aca se envia una solicitud axios.post -- dado a que la ruta del login es un post
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        email,
        password,
      });
      console.log("respuesta del servidor 1:", response.data);

      const token = response.data.token; //almacenamos en la variable token la respuesta que nos de el endpoint
      Cookies.set("token", token); //se almacena token en token, dentro de una galletita

      const nuevoValorAdmin = response.data.isAdmin; // Ajusta esto según la estructura real de tu respuesta
    setIsAdmin(nuevoValorAdmin);
    
      onLogin(); //ACAAAAAAAAAAAAAAA ESTA EL ONLOGIN PA QUE NO SE NOS PIERDA DESPUES
      alert("Inicio de sesion correcto");
    } catch (error) {
      console.error("Error en la solicitud:", error);

      if (error.response) {
        // La solicitud fue hecha y el servidor respondió con un código de estado diferente de 2xx
        console.error("Respuesta del servidor:", error.response.data);
        console.error("Código de estado:", error.response.status);
        console.error("Cabeceras de respuesta:", error.response.headers);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió ninguna respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        // Algo sucedió en la configuración de la solicitud que disparó un error
        console.error("Error de configuración de la solicitud:", error.message);
      }

      alert("Usuario o Contraseña incorrecta");
    }
  };

  const handleLogout = () => {
    onLogout() 
 };

  if (loginSuccess) {
     ;
  }

  return (
    <AuthContext.Provider
      value={{
        showLogin,
        setShowLogin,
        authenticated,
        isAdmin,
        email,
        password,
        handleLogin, // Agregar handleLogin al contexto
        handleLogout,
        setEmail: setEmailValue,
        setPassword: setPasswordValue,
        setIsAdmin: setIsAdminValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useAuthFunctions = () => {
  const { handleLogin, handleLogout } = useAuth();

  return { handleLogin, handleLogout };
};
