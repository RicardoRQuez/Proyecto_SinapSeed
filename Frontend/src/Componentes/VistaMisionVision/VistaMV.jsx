import React from "react";
import styles from "./VistaMV.css";
import image1 from "./ImagMV/image1.jpg";
import image2 from "./ImagMV/image2.jpg";
import image3 from "./ImagMV/image3.jpg";
import nosotros from "./ImagMV/nosotros.jpg";

export const VistaMisionVision = () => {
  return (
    <>
        <div className="banner"> 
        <h1 className="tituloquien">Quienes Somos </h1>
        </div>
      {/* Primera sección */}
      <div className="row filita">
            <div className="col-6">
            <h2 className={styles.tituloMision}>Misión</h2>
              <span className="textoCompleto1 text-justify">
                Nuestra misión está dedicada a la promoción y facilitación de
                trabajos decentes a través de la educación y el desarrollo de
                habilidades. Nos comprometemos a proporcionar programas
                educativos de alta calidad que permitan a las personas adquirir
                las competencias necesarias para acceder a empleos dignos y
                satisfactorios. Nuestro compromiso a largo plazo es contribuir
                al progreso económico y social, fomentando una fuerza laboral
                capacitada y empoderada.
              </span>
            </div>
            <div className="col-5">
              <div className={styles.imagenMision}>
                <img src={image2} alt="Descripción de la misión" />
              </div>
            </div>
      </div>

      {/* Segunda sección */}
      <div className="row filita">
      <div className="col-4">
          <div className={styles.imagenVision}>
            <img src={image3} alt="Descripción de la visión" />
          </div>
        </div>
        <div className="col-8">
          <h2 className={styles.tituloVision}>Visión</h2>
          <span className="textoCompleto2 text-justify">
            Nuestra visión representa la aspiración de convertirnos en un faro
            de cambio positivo en el panorama laboral a través de la educación.
            Nos esforzamos por formar profesionales altamente capacitados que
            puedan acceder a empleos con condiciones significativamente mejores,
            lo que a su vez contribuirá al crecimiento económico de las personas
            y a la realización personal de los individuos.
          </span>
        </div>
      
      </div>

      {/* Tercera sección */}
          <h2 className={styles.tituloNosotros}>Nosotros</h2>
              <span className="textoCompletito3">
                En SinapSeed, somos un equipo de profesionales altamente
                apasionados en el desarrollo web. Nos comprometemos a ofrecer
                soluciones innovadoras en educación en línea para capacitar a
                las personas en habilidades valiosas, facilitando así su acceso
                a empleos dignos y contribuyendo al crecimiento económico de las
                comunidades. Guiados por nuestros valores de excelencia,
                colaboración y aprendizaje constante, estamos construyendo una
                plataforma que revolucionará la educación en línea, empoderando
                a las personas para alcanzar sus metas profesionales y
                promoviendo trabajos decentes y el crecimiento económico
                sostenible.
              </span>
              <div className={styles.imagenNosotros}>
                <img src={nosotros} alt="Descripción de la nosotros" />
              </div>
    </>
  );
};
