import React from "react";
import './BeneficiosContainer.css';
import { CuadroDatos } from "../Banner/CuadroDatos/CuadroDatos";

export const Beneficios = () => {
  // Define los datos que quieres pasar como props
  const datosCuadro = {
    enlaces: [
      "https://www.google.cl",
      "https://www.google.cl",
      "https://www.google.cl",
      "https://www.google.cl",
    ],
    imagenes: [
      "imágenes/01.png",
      "imágenes/02.png",
      "imágenes/03.png",
      "imágenes/04.png"
    ],
    numeros: ["", "", "", ""],
    textos: [
      "Sentirse realizado",
      "Mayores probabilidades de empleo",
      "Mejores condiciones laborales",  
      "Mejor remuneración"
    ]
  };
  
  return (
  <> 

<h4 className="beneficiosTitulo">Beneficios de capacitarse</h4>
<br />
<br />
        {/* Pasa los datos como props al componente CuadroDatos */}
        <CuadroDatos datos={datosCuadro} />
        <br />
        <br />
        </>
  
  );
};