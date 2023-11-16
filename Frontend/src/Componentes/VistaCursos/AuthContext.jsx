
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cursos, setCursos] = useState([]);

  const handleCursos = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/api/v1/cursos");
      console.log("Cursos:", response.data);

      setCursos(response.data);
        console.log(cursos)
    } catch (error) {
      console.error("Error en la solicitud:", error);

      // Manejo de errores aquí...
    }
  };

  const authFunctions = {
    handleCursos,
    // Otras funciones de autenticación si es necesario agregar más
  };

  return (
    <AuthContext.Provider
      value={{
        cursos,
        handleCursos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

useAuthFunctions
export const useAuthFunctions = () => {
  const { handleCursos } = useAuth();

  return { handleCursos };
};
