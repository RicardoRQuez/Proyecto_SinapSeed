import React from 'react';
import './Banner.css';

export const Banner = () => {
  return (
    <div className="banner-image w-100 vh-100 d-flex">
      <div className="container texto-principal">
        <h1>
          ¡Haz <span className="color rosa">SinapSeed!</span><br />
          Sé la mejor versión de ti.
        </h1>
        <br />
        <p className="parrafo-portada">
          Renuévate y estudia para tu <span className="color rosa">futuro</span>. <br />
          Crea <span className="color rosa">nuevas conexiones neuronales</span> con nuestros cursos.<br />
          <br />
          Te ofrecemos una amplia gama de recursos de aprendizaje y oportunidades<br />
          formativas en colaboración con <span className="color rosa">expertos</span> de diversas industrias para{' '}
          <span className="color rosa">impulsar tu desarrollo profesional y crecimiento personal.</span>
        </p>
      </div>
    </div>
  );
};
