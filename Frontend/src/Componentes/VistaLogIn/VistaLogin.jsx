import React, { useRef, useEffect } from "react";
import "./VistaLogin.css";
import { BoxMain } from "./componentsVistaLogin/BoxMain/BoxMain.jsx";

/**
 * Componente React que representa la vista de inicio de sesión.
 * 
 * @param {Function} onClose - Función para cerrar el componente.
 * @returns {JSX.Element} Elemento JSX que representa la vista de inicio de sesión.
 */

export const VistaLogin = ({ onClose }) => {
  // Referencia al elemento principal del login
  const loginRef = useRef();

  // Función para cerrar el componente cuando se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Agregar un controlador de eventos al documento para cerrar el componente al hacer clic fuera
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);


  // Renderiza la vista de inicio de sesión
  return (
    <main ref={loginRef} className="containerLuis">
      <BoxMain onClose={onClose} />
    </main>
  );
};
