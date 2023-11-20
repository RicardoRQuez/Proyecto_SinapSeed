import React from 'react'

export const ComponenteHeader = ({nombreUsuario}) => {
  return (
    <>
        <header className="row headerLuisPerfil">
                <h1 className="tituloPerfil"> ¡ BIENVENIDO, A TU PERFIL <span className="nombrePerfil">{nombreUsuario}</span> !</h1>
        </header>  
    </>
  )
}
