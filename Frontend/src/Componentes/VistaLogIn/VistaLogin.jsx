import React, { useRef, useEffect } from "react";
import "./VistaLogin.css";
import { BoxMain } from "./componentsVistaLogin/BoxMain/BoxMain.jsx";

export const VistaLogin = ({ onClose }) => {
  const loginRef = useRef();

  // Función para cerrar el componente cuando se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Agregar un controlador de eventos al documento
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <main ref={loginRef} className="containerLuis">
      <BoxMain />
    </main>
  );
};
