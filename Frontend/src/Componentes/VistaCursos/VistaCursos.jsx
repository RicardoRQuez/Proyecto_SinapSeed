import React from 'react';
import './VistaCursos.css';


export function VistaCursos () {
  return (
      <div>
        VistaCursos
  
        <div className="container">
          {/* ROW 1 */}
          <div className="row justify-content-center align-items-center g-2">
            <img src="img/portada.png" alt="" />
          </div>
          {/* ROW 1 */}
          <br /><br />
          {/* ROW 2 */}
          <div className="row justify-content-center align-items-center g-2">
            <div className="col">
              <h2 className="titulo_grande">Full Stack Javascript</h2>
              <br />
              <span className='titulo_chico'>¿Qué es un Desarrollador Full Stack?</span>
              <br />
              <span className='texto_completo'>
                Es un programador con un perfil técnico muy completo. Conoce toda la cadena de desarrollo de software o páginas web, y maneja varios lenguajes y tecnologías. Los Desarrolladores Full Stack controlan todo lo que un usuario ve cuando utiliza una página web (front-end), como también la parte “escondida”, que no es visible al público y que incluye, entre otras cosas, las bases de datos y las solicitudes de API (back-end).
                Estos desarrolladores son muy demandados por el mercado y tienen múltiples oportunidades de carrera y aprendizaje.
              </span>
              <br /><br />
              <a className="btn btn-primary" href="#" role="button">Apuntate al curso</a>
              <a className="btn btn-success" href="#" role="button">Gratis</a>
            </div>
            <div className="col">
              <center>
                <img src="img/javascript.png" alt="" width="50%" />
              </center>
              <br />
              <center>
                <h3><b className="colornota1" >8.9</b>/<b className="colornota2" >10</b></h3>
              </center>
              <br />
              Quieres ingresar al foro con el detalle de los usuarios de esta puntuación? <a href="#">Pincha Acá</a>
            </div>
          </div>
          {/* ROW 2 */}
        </div>
        <br /><br /><br />
      </div>
    );
  };

function TableroMedio() {
  const [count, setCount] = useState(0);
  return (
<table>
  <tr><td width="60%">Titulo</td><td width="40%">Imagen</td></tr>
</table>
  );
}
