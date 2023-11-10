import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import './estiloNavbar.css'

export function MyNavbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.pageYOffset > 80) {
        nav.classList.add('bg-dark', 'shadow');
      } else {
        nav.classList.remove('bg-dark', 'shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark col-lg-12 col-md-12 col-sm-12">
      <div className="container-fluid">

      <NavLink to="/"> {/* Agrega el enlace al que debe dirigirse la imagen */}
      <img src="imágenes/Sinapsis fondo oscuro2.png" alt="Logo" className="navbar-logo" /> {/* Agrega tu imagen aquí */}
    </NavLink>
        <NavLink className="navbar-brand me-auto" to="/">SinapSeed</NavLink>
  
          <ul className="navbar-nav ml-auto">
          
              <li className="nav-item">
                <NavLink className="nav-link" to="/cursosGen">Cursos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/foro">Foro</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/noticias">Noticias</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link registro" to="/registro">Registro</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link inicioSesion" to="/login">Iniciar sesión</NavLink>
              </li>
      
          </ul>
     
      </div>
    </nav>
  );
}
