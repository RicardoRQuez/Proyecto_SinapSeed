import React from 'react';
import { HeaderVistaLogin } from "../headerVistaLogin/HeaderVistaLogin.jsx";
import { FormLogin } from '../formLogin/FormLogin.jsx';
import './BoxMain.css';
import logo from '../../../VistaLogIn/logo_SinapSeed.png';

export const BoxMain = ({onClose}) => {
  return (
    <div className="contenedorLuis">
      <div className="rectanguloLuis">
        <HeaderVistaLogin />
        <section>
          <div className='row'>
            <div className='col-1'>              
            </div>
            <div className='col-10'>
              <FormLogin onClose={onClose} />
            </div>            
          </div>
        </section>  
        <section className='contenedorImagen'>
          <img src={logo} alt="Logo" className='imagenLogoLuis'/>         
        </section>
        
      </div>
    </div>
  );
};


