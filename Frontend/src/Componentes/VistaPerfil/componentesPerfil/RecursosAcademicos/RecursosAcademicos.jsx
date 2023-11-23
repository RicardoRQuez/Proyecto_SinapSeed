import React from "react";
import "./RecursosAcademicos.css";
import { Link } from 'react-router-dom';

/**
 * Componente React que muestra los recursos académicos de un usuario.
 * Permite visualizar información sobre cursos, bootcamps, clases, seminarios,
 * certificados y compras relacionadas con la educación.
 *
 * @returns {JSX.Element} Elemento JSX que representa la sección de recursos académicos.
 */

export const RecursosAcademicos = () => {
  return (
    <>
      <section className="containercomponenteRecursosAcademicos">
        <header>
          <h2 className="subtituloRecursosAcademicos">
            {" "}
            ¡ Revisa acá tus datos sobre <br></br>los recursos académicos !
          </h2>
        </header>
        <div
          className="btn-group-vertical botonesLuisPerfil"
          role="group"
          aria-label="Vertical button group"
        >
          <div className="btn-group  " role="group">
            <button
              type="button"
              className="btn dropdown-toggle botonLuisPerfil"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="tamañoTexto">Mis Recursos Académicos</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Curso
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bootcamps
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Clases
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Seminarios
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn botonLuisPerfil">
            Mis Certificados
          </button>
          <Link to="/ShoppingCart" className="btn botonLuisPerfil">
            Mis compras
          </Link>
        </div>
      </section>
    </>
  );
};
