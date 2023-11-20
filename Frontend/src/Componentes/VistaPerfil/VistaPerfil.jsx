import React, { useState, useEffect } from "react";
import "./VistaPerfil.css";
import { PrincipalBox } from './componentesPerfil/principalBox/PrincipalBox.jsx';
import { ComponenteHeader } from './componentesPerfil/ComponenteHeader/ComponenteHeader.jsx';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const VistaPerfil = () => {
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: ""
    });

    useEffect(() => {
        obtenerDatosUsuario();
    }, []);

    const obtenerDatosUsuario = async () => {   
        try {
            const consultaCookie = Cookies.get("token");

            if (consultaCookie) {
                const tokedDecode = jwtDecode(consultaCookie);
                const idToken = tokedDecode.data._id;

                if (idToken) {
                    const response = await axios.get(
                        `http://localhost:3000/api/v1/user/${idToken}`
                    );
                    setDatosUsuario(response.data);
                } else {
                    console.warn("No hay un usuario autenticado");
                }
            } else {
                console.warn("No hay una cookie de token");
            }
        } catch (error) {
            console.error("Error al obtener los datos del usuario:", error);
        }
    };

    return (
        <>
            <section className="row imagenLoginLuis">
                <ComponenteHeader nombreUsuario={datosUsuario.nombre} />
                <PrincipalBox />
            </section>
        </>
    )
}
