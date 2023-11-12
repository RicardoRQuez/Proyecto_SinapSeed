import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import './estiloNavbar.css';
import { VistaLogin } from '../VistaLogIn/VistaLogin.jsx';
import { useAuth, useAuthFunctions } from '../VistaLogIn/AuthContext';

export function MyNavbar({ onLogout }) {
  const {showLogin, setShowLogin, authenticated, isAdmin} = useAuth();
  const { handleLogout } = useAuthFunctions();
  const navigate = useNavigate();



  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const goToHome = () => {
    navigate('/'); // Navegar a la página de inicio usando navigate
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
            src="imágenes/Sinapsis fondo oscuro2.png"
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
              <li>
              <button className="nav-link inicioSesion" onClick={() => { handleLogout(); goToHome(); }}>
                Cerrar Sesión
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
                  to="/"
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