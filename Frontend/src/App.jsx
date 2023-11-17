import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { VistaHome } from "./Componentes/VistaHome/VistaHome.jsx";
import { MyNavbar } from "./Componentes/Navbar/Navbar.jsx";
import { VistaLogin } from "./Componentes/VistaLogIn/VistaLogin.jsx";
import { Footer } from "./Componentes/ZFooter/FooterPagina.jsx";
import { VistaForo } from "./Componentes/VistaForo/VistaForoCorregido.jsx";
import { VistaRegistro } from "./Componentes/VistaRegistro/VistaRegistro.jsx";
import { VistaCursoGen } from "./Componentes/VistaCursoGen/VistaCursoGen.jsx";
import { VistaNoticias } from "./Componentes/VistaNoticias/VistaNoticias.jsx";
import { VistaCursos } from "./Componentes/VistaCursos/VistaCursos.jsx";
import { AuthProvider } from "./Componentes/VistaLogIn/AuthContext";
import { useAuth } from "./Componentes/VistaLogIn/AuthContext";
import {AdminUser} from "./Componentes/AdminUsuarios/vistaAdminUsuarios.jsx";
import {EditUsuario} from "./Componentes/AdminUsuarios/Tabla/editUsuarioOla.jsx";
import {CargarCursos} from "./Componentes/VistaAdminCursos/CargarCursos.jsx";
import {EditCurso} from "./Componentes/VistaAdminCursos/EditarCursos.jsx";
import { VistaPerfil } from "./Componentes/VistaPerfil/VistaPerfil.jsx";
import {CrearCurso} from "./Componentes/VistaAdminCursos/AgregarCursos.jsx"


export function App() {
  const { showLogin } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <MyNavbar/>

        {showLogin && <VistaLogin />}
        <Routes>
          <Route path="/" element={<VistaHome />} />
          <Route path="/login" element={<VistaLogin />} />
          <Route path="/foro" element={<VistaForo />} />
          <Route path="/registro" element={<VistaRegistro />} />
          <Route path="/cursosGen" element={<VistaCursoGen />} />
          <Route path="/noticias" element={<VistaNoticias />} />
          <Route path="/cursos/:id" element={<VistaCursos />} />
          <Route path="/foro" element={<VistaForo />} />
          <Route path="/perfil" element={<VistaPerfil  />} />
          <Route path="/administrar-usuarios" element={<AdminUser />} />

          <Route path="/editar-usuario/:id" element={<EditUsuario/>} />
  
          <Route path="/editar-curso/:id" element={<EditCurso/>} />
          <Route path="/administrar-cursos" element={<CargarCursos />} />
          <Route path="/agregar-curso" element={<CrearCurso />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}
