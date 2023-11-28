import React from "react";
import "./CuadroFotasas.css"; // Asegúrate de tener la ruta correcta a tu archivo de estilos
import { FormatoCuadro } from "./FormatoCuadroFotos.jsx";

export const EquipoSinapSeed = () => {
  return (
    <>
      <div className="cajitaFotos container-fluid">
        <h2 className="tituloEquipoSinapSeed">EQUIPO SINAPSEED</h2>

        <div className="row justify-content-between">
          <div className="col-2 col-md-1">
            <a
              href="https://www.linkedin.com/in/diego-mart%C3%ADnez-lienlaf-45b4a2295/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormatoCuadro
                imagenes="/imágenes/Enjulandia.jpeg"
                numeros="Diego Martínez"
                textos="Developer"
              />
            </a>
          </div>
          <div className="col-2 col-md-1">
            <a
              href="https://www.linkedin.com/in/ivana-castillo1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormatoCuadro
                imagenes="/imágenes/ivana.jpeg"
                numeros="Ivana Castillo"
                textos="Developer"
              />
            </a>
          </div>
          <div className="col-2 col-md-1">
            <a
              href="https://www.linkedin.com/in/sabrina-silva-rodr%C3%ADguez-4b407b112/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormatoCuadro
                imagenes="/imágenes/Sabrina.jpeg"
                numeros="Sabrina Silva"
                textos="Developer"
              />
            </a>
          </div>
          <div className="col-2 col-md-1">
            <a
              href="https://www.linkedin.com/in/ricardo-rodriguez-quezada-b8948b27b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormatoCuadro
                imagenes="/imágenes/ricardo.jpeg"
                numeros="Ricardo Rodríguez"
                textos="Scrum Master"
              />
            </a>
          </div>
          <div className="col-2 col-md-1">
            <a
              href="https://www.linkedin.com/in/luisdiazcaroca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormatoCuadro
                imagenes="/imágenes/Luis.jpeg"
                numeros="Luis Díaz"
                textos="Product Owner"
              />
            </a>
          </div>
          <div className="col-2 col-md-1">
            <a
              href="https://www.linkedin.com/in/catalina-galaz-garrido/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormatoCuadro
                imagenes="/imágenes/catalinaAWS.jpeg"
                numeros="Catalina Galaz"
                textos="Equipo AWS"
              />
            </a>
          </div>
          <div className="col-2 col-md-1">
            <a
              href="https://www.linkedin.com/in/luis-montero-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cajitaFotoss">
              <FormatoCuadro 
                imagenes="/imágenes/luisAWS.jpeg"
                numeros="Luis Montero"
                textos="Equipo AWS"
              />
              </div>
              
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
