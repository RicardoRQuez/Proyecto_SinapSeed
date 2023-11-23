import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import './BusquedaCursoGen.css'

export const BusquedaCursoGen = () => {
  // Estado para almacenar el valor de búsqueda
  const [searchValue, setSearchValue] = useState('');

  // Función para manejar cambios en el input de búsqueda
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Función para manejar la acción de búsqueda
  const handleSearch = (event) => {
    event.preventDefault();
    // Aquí puedes utilizar el valor de búsqueda (searchValue) como desees, por ejemplo, realizar una búsqueda o llamar a una función que maneje la lógica de búsqueda.
    console.log('Realizar búsqueda con:', searchValue);
    // Puedes añadir tu lógica aquí para procesar la búsqueda
  };

  return (
    <>
        <nav className=" navLuis">
            <div className="container-fluid">
                <form className="d-flex" onSubmit={handleSearch} role="search">
                    <input
                      className="form-control me-2 inputLuisVCG"
                      type="search"
                      placeholder="¿Qué deseas aprender?"
                      aria-label="Search"
                      value={searchValue}
                      onChange={handleInputChange}
                    />
                    <button
                      className="btn btn-outline-success botonLuisVCG"
                      type="submit"
                    >
                      Buscar
                    </button>
                </form>
            </div>
        </nav>
    </>
  );
};
