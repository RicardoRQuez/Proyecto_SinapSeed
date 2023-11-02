import React from 'react';
import './BotonesMenu.css'; 
import { Link } from 'react-router-dom';


export const Botones = () => {
  return (
    <div className="container text-center botonesVarios">
      <h4 className="ExploraNuestroContenido">Explora nuestro contenido</h4>

      <div className="container text-center botonesVarios">
        <div className="row">
          <div className="col">
          <Link to="/cursosGeneral" className="btn btn-secondary">
        Cursos
      </Link>
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

