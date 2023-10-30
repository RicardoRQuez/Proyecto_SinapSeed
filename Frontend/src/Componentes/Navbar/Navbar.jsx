import { NavLink } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

export function MyNavbar() {

  const nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 80) {
      nav.classList.add('bg-dark', 'shadow');
    } else {
      nav.classList.remove('bg-dark', 'shadow');
    }
  });
  
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">SinapSeed</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              <>
                <li className="nav-item" >
                  <NavLink className="nav-link" to="/cursos">Cursos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/info">Foro</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link noticias" to="/noticias">Noticias</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link inicioSesion" to="/login">Iniciar sesión</NavLink>
                </li>
              
                <li className="nav-item">
                  <button className="nav-link btn btn-link">Registro</button>
                </li>
              
               </>
          </ul>
        </div>
      </div>
    </nav>
  );
}



