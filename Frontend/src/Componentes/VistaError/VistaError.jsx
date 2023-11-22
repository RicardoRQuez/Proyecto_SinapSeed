import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VistaError.css"; // Importa el archivo de estilos CSS
import gif from './cerebro-burnout.gif';

export const VistaError = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-box">
        <img src = {gif} className="gifError"/>
        <p> <span className="textoNegro1"> ¡Ouch! </span>se nos secó el <span className="cambioColorError">cerebro</span></p>
        <h1> Disculpa, ha ocurrido un <span className="cambioColorError">Error</span></h1>
        <p>La página <strong>{location.pathname}</strong> no existe :( <br></br> Volvamos al <span className="cambioColorError">inicio</span>! ^^.</p>
        <button onClick={() => navigate('/')} className="botonLuisError">INICIO</button>
      </div>
    </div>
  );
};
