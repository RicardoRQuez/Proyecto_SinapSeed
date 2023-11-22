import React from "react";
import "./PrincipalBox.css";
import { RecursosAcademicos } from "../RecursosAcademicos/RecursosAcademicos.jsx";
import { ComponenteINFO } from "../componenteINFO/ComponenteINFO.jsx";

/**
 * Componente React que representa la caja principal del componente VistaPerfil.
 * Contiene dos secciones: Recursos Académicos y Componente INFO.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la caja principal.
 */

export const PrincipalBox = () => {
  return (
    <>
      <main className=" row containerprincipalBox">
        <section className="col-3">
          <RecursosAcademicos />
        </section>
        <section className="col-9">
          <ComponenteINFO />
        </section>
      </main>
    </>
  );
};
