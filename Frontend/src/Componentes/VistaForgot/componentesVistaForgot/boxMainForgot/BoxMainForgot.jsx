import React from "react";
import "./BoxMainForgot.css";
import { HeaderBoxMain } from "../HeaderBoxMain/HeaderBoxMain.jsx";
import { MainBoxMain } from "../MainBoxMain/MainBoxMain.jsx";

export const BoxMainForgot = () => {
  return (
    <>
      <main className=" row containerBoxMainForgot">
        <section className="row">
            <HeaderBoxMain/>
        </section>
        <section className="row">
            <MainBoxMain />
        </section>
        <section className="row">

        </section>
        
      </main>
    </>
  );
};
