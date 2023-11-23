import React from "react";
import "./PrincipalBox.css";

import { ComponenteINFO } from "../componenteINFO/ComponenteINFO.jsx";

export const PrincipalBox = () => {
  return (
    <>
      <main className=" row containerprincipalBox">
  
        <section className="col-12">
          <ComponenteINFO />
        </section>
      </main>
    </>
  );
};

