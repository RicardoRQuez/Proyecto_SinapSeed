import React from "react";
import styles from "./Banner.module.css";
import { CuadroDatos } from "./CuadroDatos/CuadroDatos";

export const Banner = () => {
  // Define los datos que quieres pasar como props
  const datosCuadro = {
    enlaces: [
      "https://www.google.cl",
      "https://www.google.cl",
      "https://www.google.cl",
      "https://www.google.cl",
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

        <div className={styles.banner}>
        <div className={`${styles.container} ${styles["container-fluid"]}`}>
          <h1 className={styles.hazSinapSeed}>
            ¡Haz <span className={styles.rosa}>SinapSeed!</span>
            <br />
            Sé la mejor versión de ti.
          </h1>
          <br />
          <p className={styles.parrafo}>
            Renuévate y estudia para tu{" "}
            <span className={styles.rosa}>futuro</span>
            . <br />
            Crea{" "}
            <span className={styles.rosa}>nuevas conexiones neuronales</span> con
            nuestros cursos.
            <br />
            <br />
            Te ofrecemos una amplia gama de recursos de aprendizaje y
            oportunidades
            <br />
            formativas en colaboración con{" "}
            <span className={styles.rosa}>expertos</span> de diversas industrias
            para{" "}
            <span className={styles.rosa}>
              impulsar <br />
              tu desarrollo profesional y crecimiento personal.
            </span>
          </p>
          </div>
          <CuadroDatos datos={datosCuadro} />
        </div>

    

   
   
    </>
  );
};