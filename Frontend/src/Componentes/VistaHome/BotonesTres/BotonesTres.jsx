import React from 'react';
import './BotonesTres.css'; // Asegúrate de importar el archivo de estilos si es necesario

export const BotonesTres= () => {
  return (
    <>
    <div className="banner-image w-100 d-flex trama">
      <div className="container">
        <div className="row rowBotones">
          <div className="col position-relative">
            <a href="/cursos">
              <img src="imágenes/intentoboton3.jpg" alt="botones-grandes" className="img-fluid botones-grandes" />
              <div className="position-absolute bottom-0">
                <p className="textoTresBotones">Nuestros Cursos </p>
              </div>
            </a>
          </div>
          <div className="col position-relative">
            <a href="/noticias">
              <img src="imágenes/intentodeboton.jpg" alt="botones-grandes" className="img-fluid botones-grandes" />
              <div className="position-absolute bottom-0">
                <p className="textoTresBotones">Noticias</p>
              </div>
            </a>
          </div>
          <div className="col position-relative">
            <a href="#">
              <img src="imágenes/intentoboton2.jpg" alt="botones-grandes" className="img-fluid botones-grandes" />
              <div className="position-absolute bottom-0">
                <p className="textoTresBotones">Alumni</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    </>
  );
};

