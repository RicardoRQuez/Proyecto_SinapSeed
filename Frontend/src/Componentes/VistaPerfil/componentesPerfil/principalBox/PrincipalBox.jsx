import React from "react";
import "./PrincipalBox.css";
import { RecursosAcademicos } from "../RecursosAcademicos/RecursosAcademicos.jsx";
import { ComponenteINFO } from "../componenteInfo/ComponenteInfo.jsx";

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
