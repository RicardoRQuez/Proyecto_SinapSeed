import { NavLink } from 'react-router-dom';
import React from 'react';



export function MyNavbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md3">
      <div className="container">
        <NavLink className="navbar-brand" to="/home">SinapSeed</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cursos">Cursos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/foro">Foro</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Noticias</NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link">Registro</button>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Iniciar sesión</NavLink>
                </li>
              
               </>
          </ul>
        </div>
      </div>
    </nav>
  );
}



