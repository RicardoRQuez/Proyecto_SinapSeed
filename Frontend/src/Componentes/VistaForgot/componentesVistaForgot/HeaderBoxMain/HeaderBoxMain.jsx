import React from "react";
import "./HeaderBoxMain.css";

export const HeaderBoxMain = () => {
  
    return (
      <>
        <h1 className="tituloForgot">
            ¿Problemas al <span className="iniciarSesion"> iniciar sesión </span>?
        </h1>
        <p className="textoForgot">
        Ingresa tu <span className="modificaciónForgot">correo electrónico</span>, <span className="modificaciónForgot">teléfono</span> y <span className="modificaciónForgot">rut</span> <br></br> para enviarte una <b> clave provisoria</b> .
        </p>
      </>
    );
  };