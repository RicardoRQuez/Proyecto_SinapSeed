import { NavLink } from 'react-router-dom';
import React from 'react';



export function MyNavbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/Home">SinapSeed</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/info">Cursos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/info">Foro</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Noticias">Noticias</NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link">Registro</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link">Ingresar</button>
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



