import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import './BusquedaCursoGen.css'

export const BusquedaCursoGen = () => {
  return (
    <>
        <nav className=" navLuis">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 inputLuisVCG" type="search" placeholder="¿Que deseas aprender?" aria-label="Search"/>
                    <button className="btn btn-outline-success botonLuisVCG" type="submit"> Buscar </button>
                </form>
            </div>
        </nav>
    </>
  );
};
