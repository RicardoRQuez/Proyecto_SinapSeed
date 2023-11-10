import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import './navbar.css';
import { VistaLogin } from '../VistaLogIn/VistaLogin.jsx';
=======
import React, { useEffect } from 'react';
import './estiloNavbar.css'
>>>>>>> 00bf0e46f469dfc1cc360b7c254c1274fdb125e7

export function MyNavbar() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 80) {
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
      <div className="container-fluid diego">
        <NavLink to="/">
          <img src="imágenes/Sinapsis fondo oscuro2.png" alt="Logo" className="navbar-logo" />
        </NavLink>
        <NavLink className="navbar-brand me-auto" to="/">
          SinapSeed
        </NavLink>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/cursosGen">
              Cursos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/foro">
              Foro
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/noticias">
              Noticias
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link registro" to="/registro">
              Registro
            </NavLink>
          </li>
          <li className="nav-item">
            <button className="nav-link inicioSesion" onClick={toggleLogin}>
              Iniciar sesión
            </button>
          </li>
        </ul>
      </div>
      
      {showLogin && (
        <VistaLogin onClose={closeLogin} />
      )}
    </nav>
  );
}
