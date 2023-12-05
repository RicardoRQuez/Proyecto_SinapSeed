import React from 'react';
import './BotonesTres.css'; // Asegúrate de importar el archivo de estilos si es necesario
import { useAuth, useAuthFunctions } from '../../VistaLogIn/AuthContext.jsx';




export const BotonesTres= () => {
  const { showLogin, setShowLogin } = useAuth();
  const { authenticated} = useAuth();

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  
  return (
    <>

    <div className="banner-image w-100 d-flex trama">


      <div className="container">
        <div className="row rowBotones">

        {authenticated ? (

          <div className="col-lg-4 col-md-6 mb-4 position-relative ">
            <a href="/cursosGen">
              <img src="imágenes/intentoboton3.jpg" alt="botones-grandes" className="img-fluid botones-grandes" />
              <div className="position-absolute bottom-0">
                <p className="textoTresBotones">Nuestros Cursos </p>
              </div>
            </a>
          </div>
 ) : (
  <>
    <div className="col-lg-4 col-md-6 mb-4 position-relative ">
            <a href='#!' >

              
              <img src="imágenes/registrate.jpg" alt="botones-grandes" className="img-fluid botones-grandes Sabrina"    onClick={toggleLogin} />
              <div className="position-absolute bottom-0">
                <p className="textoTresBotones">Nuestros Cursos</p>
              </div>
            </a>
          </div>
          </>
  )}

          <div className="col-lg-4 col-md-6 mb-4 position-relative">
            <a href="/quienesSomos">
              <img src="imágenes/intentodeboton.png" alt="botones-grandes" className="img-fluid botones-grandes" />
              <div className="position-absolute bottom-0">
                <p className="textoTresBotones">Quienes Somos</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 position-relative">
            <a href="/alumni">
              <img src="imágenes/intentoboton2.jpg" alt="botones-grandes" className="img-fluid botones-grandes" />
              <div className="position-absolute bottom-0">
                <p className="textoTresBotones">Alumni</p>
              </div>
            </a>
          </div>
        </div>
      </div>

 


    </div>
    <br />
    <br />



    </>
  );
};