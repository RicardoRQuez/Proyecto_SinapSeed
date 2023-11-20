import './BotonesMenu.css'; 
import ButtonMenu from './ButtonMenuComponents';
import { ChakraProvider } from '@chakra-ui/react'


export const Botones = () => {


  return (
    <ChakraProvider> 
    <div className="container text-center botonesVarios">
      <h4 className="ExploraNuestroContenido">¿Qué podrás encontrar en SinapSeed?</h4>

      <div className="container text-center botonesVarios">
        <div className="row">
          <div className="col-md-4 col-sm-6">

          <ButtonMenu
          titleButton='Cursos'
          titlecontent="¿De qué se tratan los cursos?"
          content= "Resumen formativo que destaca los objetivos, beneficios y resultados clave del curso de manera atractiva y directa, motivando la participación e interés de los estudiantes potenciales"
          />
          </div>
          <div className="col-md-4 col-sm-6">
         <ButtonMenu
         titleButton='Bootcamp'
         titlecontent="¿De qué se tratan los Bootcamps?"
         content ='Un bootcamp, en el ámbito educativo y de formación profesional, se refiere a un programa de aprendizaje intensivo y de corta duración diseñado para enseñar habilidades específicas en áreas como la programación informática, el diseño, el marketing digital, la ciencia de datos, entre otros. Estos programas suelen ser prácticos, enfocados en proyectos y buscan preparar a los participantes para roles laborales específicos en el menor tiempo posible. Los bootcamps pueden ser presenciales o en línea y a menudo son elegidos por personas que buscan una rápida actualización de habilidades o un cambio de carrera.'
         />
          </div>
          <div className="col-md-4 col-sm-12">
          <ButtonMenu
         titleButton='Clases'
         content =''
         />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
          <ButtonMenu
         titleButton='Seminarios'
         titlecontent="¿De qué se tratan los Seminarios?"
         content ='Un seminario es una reunión académica o de aprendizaje en la cual un experto o grupo de expertos comparte información, conocimientos o discute temas específicos con un grupo de participantes. Los seminarios suelen ser interactivos y permiten la participación activa de los asistentes a través de preguntas, discusiones y actividades prácticas.'
         />
          </div>
          <div className="col-md-6 col-sm-6">
          <ButtonMenu
         titleButton='Destacados'
         content =''
         />

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
    </ChakraProvider>
  );
};