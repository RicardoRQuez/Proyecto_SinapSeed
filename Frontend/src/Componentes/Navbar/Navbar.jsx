import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

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
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez, similar a componentDidMount

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">SinapSeed</NavLink>
  
          <ul className="navbar-nav ml-auto">
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cursos">Cursos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/foro">Foro</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/noticias">Noticias</NavLink>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link">Registro</button>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link inicioSesion" to="/login">Iniciar sesión</NavLink>
              </li>
            </>
          </ul>
     
      </div>
    </nav>
  );
}