import React from "react";
import "./Banner.css";
import { CuadroDatos } from "./CuadroDatos/CuadroDatos";

export const Banner = () => {
  // Define los datos que quieres pasar como props
  const datosCuadro = {
    tooltips : [
      "Podrás encontrar una gran variedad de cursos en tecnología.",
      "Contamos con varias empresas asociadas para que puedas encontrar el curso que buscas.",
      "Nuestros egresados tardan menos de 3 meses en encontrar empleo.",
      "Contamos con una gran cantidad de estudiantes que nos prefieren a diario."
    ],
    imagenes: [
      "imágenes/cuadro 1.png",
      "imágenes/cuadro 2.png",
      "imágenes/cuadro 3.png",
      "imágenes/cuadro 4.png"
    ],
    numeros: ["70+", "40+", "5000+", "100+"],
    textos: [
      "Cursos, bootcamps y más!",
      "Empresas asociadas",
      "Egresados con empleo",
      "Usuarios al día"
    ]
  };
  
  return (
  
<>

<div className='portadaHome banner '>
<div className="portadaHome container-fluid ">
  <h1 className="hazSinapSeed">
    ¡Haz <span className="rosa">SinapSeed!</span>
    <br />
    Sé la mejor versión de ti.
  </h1>
  <br />
  <p className="parrafo">
    Renuévate y estudia para tu{" "}
    <span className="rosa">futuro</span>
    . <br />
    Crea{" "}
    <span className="rosa">nuevas conexiones neuronales</span> con
    nuestros cursos.
    <br />
    <br />
    Te ofrecemos una amplia gama de recursos de aprendizaje y
    oportunidades
    <br />
    formativas en colaboración con{" "}
    <span className="rosa">expertos</span> de diversas industrias
    para{" "}
    <span className="rosa">
      impulsar <br />
      tu desarrollo profesional y crecimiento personal.
    </span>
  </p>
  </div>

  <div className="cajitaProps container">

  <div className="cajitaProps row">

    <div className="cajitaProps col-3 col-md-3">
    <CuadroDatos imagenes='imágenes\cuadro 1.png' numeros='70+' textos='¡Cursos, bootcamps y más!' />
    </div>
    <div className="cajitaProps col-3 col-md-3">
    <CuadroDatos imagenes='imágenes\cuadro 2.png' numeros='40+' textos='Empresas asociadas' />
    </div>
    <div className="cajitaProps col-3 col-md-3">
    <CuadroDatos imagenes='imágenes\cuadro 3.png' numeros='100+' textos='Egresados con empleo' />
    </div>
    <div className="cajitaProps col-3 col-md-3">
    <CuadroDatos imagenes='imágenes\cuadro 4.png' numeros='80+' textos='Usuarios al día' />
    </div>

  </div>
</div>


</div>
</>
    
  );
};