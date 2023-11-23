import React from "react";
import "./BeneficiosContainer.css";
import { CuadroDatos } from "../Banner/CuadroDatos/CuadroDatos.jsx";

export function Beneficios() {
  
  return (
  
<>

<h4 className="beneficiosTitulo">Beneficios de capacitarse</h4>
  <div className="cajitaBeneficios container">

  <div className="cajitaBeneficios row">

    <div className="cajitaBeneficios col-3 col-md-3">
    <CuadroDatos imagenes='imágenes/01.png' numeros='' textos='Sentirse realizado' />
    </div>
    <div className="cajitaBeneficios col-3 col-md-3">
    <CuadroDatos imagenes='imágenes/02.png' numeros='' textos='Mayores probabilidades de empleo' />
    </div>
    <div className="cajitaBeneficios col-3 col-md-3">
    <CuadroDatos imagenes='imágenes/03.png' numeros='' textos='Mejores condiciones laborales' />
    </div>
    <div className="cajitaBeneficios col-3 col-md-3">
    <CuadroDatos imagenes='imágenes/04.png' numeros='' textos='Mejor remuneración' />
    </div>

  </div>
</div>
</>
    
  );
};