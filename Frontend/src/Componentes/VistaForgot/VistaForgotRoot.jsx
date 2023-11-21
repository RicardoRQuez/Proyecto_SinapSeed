import React from 'react';
import "./VistaForgotRoot.css"
import imagenForgot from './Forgot.jpg';
import { BoxMainForgot } from "./componentesVistaForgot/boxMainForgot/BoxMainForgot.jsx"

export const VistaForgotRoot = () => {
  
  return (
    <>
      <img src={imagenForgot} alt="imagenFondo" className='forgotLuis' />
      <BoxMainForgot className="paraBoxMain"/>
    </>
  );
};