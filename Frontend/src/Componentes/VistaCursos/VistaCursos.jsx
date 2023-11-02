import React from "react";
import styles from "./VistaCursos.module.css";
import image1 from "./imagenes/image1.png";


export const VistaCursos = () => {
  return (
    <>
     
      <div className={`${styles.portadaCursos} d-flex`}></div>
      <div className="row justify-content-center align-items-center g-2">
        {/* Primera columna */}
        <div className={`${styles.columnaUno} col-5`}>
          {/* Primera fila en la primera columna */}
          <div className="row">
            <h2 className={styles.tituloGrande}>Full Stack Javascript</h2>{" "}
          </div>
          <div className="row">
            <span className="tituloChico">
              <b>¿Qué es un Desarrollador Full Stack?</b>
            </span>
          </div>
          <div className="row">
            <span className="textoCompleto">
              Domina el desarrollo web Full Stack con el curso de JavaScript de
              Generation Chile. Aprende con proyectos reales, recibe apoyo
              personalizado y accede a oportunidades laborales. Con horarios
              flexibles y una carrera en crecimiento, este curso es para todos,
              desde principiantes hasta experimentados. Inscríbete hoy y
              prepárate para una carrera exitosa. No importa si eres un
              principiante o ya tienes experiencia en programación; este curso
              está diseñado para todos. Prepara tu camino hacia una emocionante
              carrera como desarrollador web Full Stack. ¡Inscríbete en el curso
              de JavaScript Full Stack de Generation Chile y da el siguiente
              paso hacia tu éxito profesional!
            </span>
          </div>
          <div className="row">
            <div className="col mt-3">
              <a className="btn btn-primary ml-3" href="#" role="button">
                Apúntate al curso
              </a>
            </div>
            <div className="col mt-3">
              <p className={styles.tituloGratis}> Gratis</p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5 mt-5">
          <div className={`${styles.imagenCursos}`}>
            <img src={image1} alt="Descripción de la imagen" />
          </div>
          <div className="row mt-3 text-center">
            {" "}
            {/* Primera fila */}
            <h3>
              <b className="colorNota">8.9/10</b>
            </h3>
          </div>
          <div className="row mt-3">
            {" "}
            {/* Segunda fila */}
            <p>
              Quieres ingresar al foro con el detalle de los usuarios de esta
              puntuación? <a href="#">Pincha Acá</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
