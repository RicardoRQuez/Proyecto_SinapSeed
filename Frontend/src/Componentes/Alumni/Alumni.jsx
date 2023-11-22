import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Alumni.css";
export function AlumniJSX() {
  return (
    <>
      <div className="banner">
        <h1 className="tituloquien">Nuestros Egresados</h1>
      </div>

      <Container fluid className="contenedorTabla">
        <Row className="marginTopRow">
          <Col>
            <h2 className="titulinios"> Egresado en Seguridad Cibernética</h2>
            <p>
              "Mi viaje en el mundo de la Tecnología de la Información se
              disparó después de tomar los cursos de Seguridad Cibernética.
              Antes me sentía inseguro en línea y no entendía realmente los
              riesgos, pero esta formación cambió todo eso. Aprendí a proteger
              datos, identificar amenazas y fortalecer sistemas. Ahora, no solo
              me siento más seguro navegando por internet, sino que también he
              obtenido una certificación que ha multiplicado mis oportunidades
              laborales. Estos cursos son definitivamente un activo para
              cualquiera interesado en la seguridad digital."
            </p>
          </Col>
          <Col>
            <img
              src="imágenes/intentodeboton.png"
              alt="imagen"
              className="img-fluid maclovin"
            />
            <p> Diego McLovin</p>
          </Col>
        </Row>
        <Row className="marginTopRow">
          <Col>
            <img
              src="public\imágenes\mujer1.jpg"
              alt="imagen"
              className="img-fluid Maclovin"
            />
          </Col>
          <Col>
            <h2 className="titulinios">Analista de Datos</h2>
            <p>
              "Estaba buscando expandir mis habilidades profesionales y los
              cursos en Tecnología de la Información fueron mi respuesta. Opté
              por el curso de Análisis de Datos y fue la mejor decisión que
              tomé. Aprendí a manejar grandes conjuntos de datos, a extraer
              información valiosa y a crear visualizaciones impactantes. Esto ha
              sido un cambio de juego en mi carrera; ahora puedo tomar
              decisiones basadas en datos con confianza y liderar proyectos
              analíticos. Si buscas una carrera en constante evolución, estos
              cursos son definitivamente el camino a seguir."
            </p>
          </Col>
        </Row>
        <Row className="marginTopRow">
          <Col>
            <h2 className="titulinios"></h2>
            <p>
              En SinapSeed, somos un equipo de profesionales altamente
              apasionados en el desarrollo web. Nos comprometemos a ofrecer
              soluciones innovadoras en educación en línea para capacitar a las
              personas en habilidades valiosas, facilitando así su acceso a
              empleos dignos y contribuyendo al crecimiento económico de las
              comunidades. Guiados por nuestros valores de excelencia,
              colaboración y aprendizaje constante, estamos construyendo una
              plataforma que revolucionará la educación en línea, empoderando a
              las personas para alcanzar sus metas profesionales y promoviendo
              trabajos decentes y el crecimiento económico sostenible.
            </p>
          </Col>
          <Col>
            <img
              src="public\imágenes\mujer2.jpg"
              alt="imagen"
              className="img-fluid Maclovin"
            />
              <p> Javier Rodríguez</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
