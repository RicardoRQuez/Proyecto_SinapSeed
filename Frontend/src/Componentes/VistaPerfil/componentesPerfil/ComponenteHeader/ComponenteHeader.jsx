import React from 'react';

/**
 * Componente React que muestra el encabezado del perfil de usuario.
 * 
 * @param {string} nombreUsuario - Nombre del usuario para mostrar en el encabezado.
 * @returns {JSX.Element} Elemento JSX que representa el encabezado del perfil.
 */

export const ComponenteHeader = ({nombreMayusculas}) => {
  return (
    <header className="row headerLuisPerfil">
      <h1 className="tituloPerfil">
        ¡ BIENVENIDO A TU PERFIL <span className="nombrePerfil">{nombreMayusculas}</span> !
      </h1>
    </header>
  );
};
