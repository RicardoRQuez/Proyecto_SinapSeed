import React from 'react';

export const ComponenteHeader = ({ nombreUsuario }) => {
  const nombreMayusculas = nombreUsuario.toUpperCase();

  

  return (
    <header className="row headerLuisPerfil">
      <h1 className="tituloPerfil">
        ¡ BIENVENIDO A TU PERFIL <span className="nombrePerfil">{nombreMayusculas}</span> !
      </h1>
    </header>
  );
};
