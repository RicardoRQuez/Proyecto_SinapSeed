import React from 'react';
import './Banner.css';

export const Banner = () => {
  return (
    <div className="banner-image w-100 vh-100 d-flex">
      <div className="container-fluid texto-principal">
        <h1 className="hazSinapSeed">
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
          <span className="color rosa">impulsar <br/>tu desarrollo profesional y crecimiento personal.</span>
        </p>
      </div>
  
<div className="container datos-portada">
<div className="row cuadro text-center">
  <div className="col">
    <img src="imágenes/cuadro 1.png" alt="" className="iconito" />
  </div>
  <div className="col">
    <img src="imágenes/cuadro 2.png" alt="" className="iconito" />
  </div>
  <div className="col">
    <img src="imágenes/cuadro 3.png" alt="" className="iconito" />
  </div>
  <div className="col">
    <img src="imágenes/cuadro 4.png" alt="" className="iconito" />
  </div>
</div>

<div className="row cuadro text-center" style={{ color: '#C54BBF', fontWeight: 'bolder', fontSize: '25px' }}>
  <div className="col">
    70+
  </div>
  <div className="col">
    40+
  </div>
  <div className="col">
    5000+
  </div>
  <div className="col">
    100+
  </div>
</div>

<div className="row cuadro text-center" style={{ color: '#15053b', fontWeight: 600 }}>
  <div className="col">
    <p className="texto-cuadro">Cursos, bootcamps y más!</p>
  </div>
  <div className="col">
    <p className="texto-cuadro">Empresas asociadas</p>
  </div>
  <div className="col">
    <p className="texto-cuadro">Egresados con empleo</p>
  </div>
  <div className="col">
    <p className="texto-cuadro">Usuarios al día</p>
  </div>
</div>
</div>
</div>
  );
};
