import './BotonesMenu.css'; 
import ButtonMenu from './ButtonMenuComponents';



export const Botones = () => {


  return (
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
         content =''
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
         content =''
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
  );
};