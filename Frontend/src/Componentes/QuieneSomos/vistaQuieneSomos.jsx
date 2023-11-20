import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./vistaQuieneSomos.css";
export function VistaMisionVision() {
  return (
    <>
      <div className="banner">
        <h1 className="tituloquien">Quiénes Somos </h1>
      </div>
      <Container fluid className="contenedorTabla">
        <Row>
          <Col>
            <h2 className="titulinios">MISIÓN</h2>
            <p>
       
              Nuestra misión está dedicada a la promoción y facilitación de
              trabajos decentes a través de la educación y el desarrollo de
              habilidades. Nos comprometemos a proporcionar programas educativos
              que permitan a las personas adquirir las competencias necesarias
              para acceder a empleos dignos y satisfactorios. Nuestro compromiso
              a largo plazo es contribuir al progreso económico y social,
              fomentando una fuerza laboral capacitada y empoderada.
            </p>
          </Col>
          <Col>
            <img
              src="public\imágenes\imagen1.png"
              alt="imagen"
              className="img-fluid mx-auto max-width-100"
            />
          </Col>
        </Row>
        <Row>
          <Col>
          <img
              src="public\imágenes\imagen2.png"
              alt="imagen"
              className="img-fluid mx-auto max-width-100"
            />
          
          </Col>
          <Col>

          <h2 className="titulinios">VISIÓN</h2>
            <p>
            Nuestra visión representa la aspiración de convertirnos en un faro
            de cambio positivo en el panorama laboral a través de la educación.
            Nos esforzamos por formar profesionales altamente capacitados que
            puedan acceder a empleos con condiciones significativamente mejores,
            lo que a su vez contribuirá al crecimiento económico de las personas
            y a la realización personal de los individuos.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <h2 className="titulinios">NOSOTROS</h2>
          <p>En SinapSeed, somos un equipo de profesionales altamente
                apasionados en el desarrollo web. Nos comprometemos a ofrecer
                soluciones innovadoras en educación en línea para capacitar a
                las personas en habilidades valiosas, facilitando así su acceso
                a empleos dignos y contribuyendo al crecimiento económico de las
                comunidades. Guiados por nuestros valores de excelencia,
                colaboración y aprendizaje constante, estamos construyendo una
                plataforma que revolucionará la educación en línea, empoderando
                a las personas para alcanzar sus metas profesionales y
                promoviendo trabajos decentes y el crecimiento económico
                sostenible.</p>
          </Col>
          <Col>
          <img
              src="public\imágenes\imagen3.jpg"
              alt="imagen"
              className="img-fluid mx-auto max-width-100 fotografía"
            />
         
                
                </Col>
        </Row>
      </Container>
    </>
  );
}
