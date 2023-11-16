import React from "react";
import styles from "./VistaCursos.module.css";
import image1 from "./imagenes/image1.png";



export const CursoComponent = ({titulo, resumen, descripcion, imagen, precio, puntaje }) => {
 



  return (
    <>
     
      <div className={`${styles.portadaCursos} d-flex`}></div>
      <div className="row justify-content-center align-items-center g-2">
        {/* Primera columna */}
        <div className={`${styles.columnaUno} col-5`}>
          {/* Primera fila en la primera columna */}
          <div className="row">
            <h2 className={styles.tituloGrande}>{titulo}</h2>{" "}
          </div>
          <div className="row">
            <span className="tituloChico">
              <b>{resumen}</b>
            </span>
          </div>
          <div className="row">
            <span className="textoCompleto">{descripcion}
            </span>
          </div>
          <div className="row">
            <div className="col mt-3">
            <button className={styles.botonRaro}type="button">
  <a className={styles.textoBlancoBoton} href="#">Apúntate al curso</a>
</button>
            </div>
            <div className="col mt-3">
              <p className={styles.tituloGratis}>{precio}</p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5 mt-5">
          <div className={`${styles.imagenCursos}`}>
            <img src={imagen} alt="Descripción de la imagen"  height="300px" />
          </div>
          <div className="row mt-3 text-center">
            {" "}
            {/* Primera fila */}
            <h3>
              <b className="colorNota">{puntaje}</b>
            </h3>
          </div>
          <div className="row mt-3">
            {" "}
            {/* Segunda fila */}
            <p>
              Quieres ingresar al foro con el detalle de los usuarios de esta
              puntuación? <a href="/foro">Pincha Acá</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
