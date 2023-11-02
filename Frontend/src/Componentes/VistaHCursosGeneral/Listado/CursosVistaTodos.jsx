import React from 'react';
import './CursoVistaTodos.css';

export const CursosVistaTodos = () => {
  return (
    <> 
    <div>
      <div className="container-fluid bg-image"></div>

      <h2 className="tituloChingon">Cursos Disponibles</h2>

      <div className="container mt-5">
        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-between">
            <div className="col">
              <a href="#enlace1" className="btn btn-pink w-100 mb-2">Cursos</a>
            </div>
            <div className="col">
              <a href="#enlace2" className="btn btn-pink w-100 mb-2">Seminarios</a>
            </div>
            <div className="col">
              <a href="#enlace3" className="btn btn-pink w-100 mb-2">Bootcamps</a>
            </div>
            <div className="col">
              <a href="#enlace4" className="btn btn-pink w-100 mb-2">Clases</a>
            </div>
            <div className="col">
              <a href="#enlace5" className="btn btn-pink w-100 mb-2">Destacados</a>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            {/* Columnas y filas con imágenes y texto */}
            <div className="col">
              <a href="2" className="enlace">
                <img src="/imágenes/chikitos.jpg" className="img-fluid" alt="Imagen 1" />
                <p>Texto 1</p>
              </a>
            </div>
            <div className="col">
              <a href="2" className="enlace">
                <img src="/imágenes/chikitos.jpg" className="img-fluid" alt="Imagen 1" />
                <p>Texto 1</p>
              </a>
            </div>
            <div className="col">
              <a href="2" className="enlace">
                <img src="/imágenes/chikitos.jpg" className="img-fluid" alt="Imagen 1" />
                <p>Texto 1</p>
              </a>
            </div>
            <div className="col">
              <a href="2" className="enlace">
                <img src="/imágenes/chikitos.jpg" className="img-fluid" alt="Imagen 1" />
                <p>Texto 1</p>
              </a>
            </div>
            <div className="col">
              <a href="2" className="enlace">
                <img src="/imágenes/chikitos.jpg" className="img-fluid" alt="Imagen 1" />
                <p>Texto 1</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};