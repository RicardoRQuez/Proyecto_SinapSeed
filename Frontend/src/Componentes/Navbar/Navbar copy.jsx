import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './estiloNavbar.css';
import { VistaLogin } from '../VistaLogIn/VistaLogin.jsx';
import { useAuth, useAuthFunctions } from '../VistaLogIn/AuthContext';

export function MyNavbar() {
  const { showLogin, setShowLogin, authenticated, isAdmin } = useAuth();
  const { handleLogout } = useAuthFunctions();
  const navigate = useNavigate();

  const [botonTexto, setBotonTexto] = useState('Cerrar Sesión');

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleMouseEnter = () => {
    setBotonTexto('Nos Vemos!');
  };

  const handleMouseLeave = () => {
    setBotonTexto('Cerrar Sesión');
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 80) {
        nav.classList.add("bg-dark", "shadow");
      } else {
        nav.classList.remove("bg-dark", "shadow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark col-lg-12 col-md-12 col-sm-12">
      <div className="container-fluid diego">
        <NavLink to="/">
          <img
            src='/public/imágenes/sinapsisFondoOscuro2.png'
            alt="Logo"
            className="navbar-logo"
          />
        </NavLink>
        <NavLink className="navbar-brand me-auto" to="/">
          SinapSeed
        </NavLink>

        <ul className="navbar-nav ml-auto">
          {authenticated ? (
            <>
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
                <NavLink className="nav-link" to="/perfil">
                  Perfil
                </NavLink>
              </li>
              {isAdmin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/administrar-usuarios">
                      Admin. Usuarios
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/administrar-cursos">
                      Admin. Cursos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/administrar-foro">
                      Admin. Foro
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <button
                  className="nav-link inicioSesion"
                  onClick={() => {
                    handleLogout();
                    goToHome();
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {botonTexto}
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link registro" to="/registro">
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link inicioSesion"
                  onClick={toggleLogin}
                >
                  Iniciar sesión
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {showLogin && <VistaLogin onClose={closeLogin} />}
    </nav>
  );
}