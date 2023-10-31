import React from 'react';
import './BotonesMarto.css'; 

export const Botones = () => {
  return (
    <div className="container text-center titulo-botones">
      <h4 className="ExploraNuestroContenido">Explora nuestro contenido</h4>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-secondary">
              Cursos
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-secondary">
              Bootcamp
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-secondary">
              Clases
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-secondary">
              Seminarios
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-secondary">
              Destacados
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

