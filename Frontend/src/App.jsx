
import { VistaHome } from "./Componentes/VistaHome/VistaHome.jsx"
import { MyNavbar } from "./Componentes/Navbar/Navbar.jsx";
import { VistaLogin } from "./Componentes/VistaLogIn/VistaLogin.jsx";
import {Footer} from "./Componentes/ZFooter/FooterPagina.jsx"
import { VistaForo } from "./Componentes/VistaForo/VistaForo.jsx";
import { VistaRegistro } from "./Componentes/VistaRegistro/VistaRegistro.jsx";
import { VistaCursoGen } from "./Componentes/VistaCursoGen/VistaCursoGen.jsx"
import {VistaNoticias} from "./Componentes/VistaNoticias/VistaNoticias.jsx"
import {VistaCursos} from "./Componentes/VistaCursos/VistaCursos.jsx"
import { VistaCursos } from "./Componentes/VistaCursos/VistaCursos.jsx";  
import { VistaForo } from "./Componentes/VistaForo/VistaForo.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';





export function App() {
  return (
    <Router>
   
      <MyNavbar />
      <Routes>
        {/*<Route path="/noticias" element={<VistaNoticias />} />*/}
        <Route path="/" element={<VistaHome/>} />
        <Route path="/login" element={<VistaLogin/>} />
        <Route path="/foro" element={<VistaForo/>} />
        <Route path="/registro" element={<VistaRegistro/>}/>      
        <Route path="/cursosGen" element={<VistaCursoGen/>} />
        <Route path="/noticias" element={<VistaNoticias />} />
        <Route path="/cursos" element={<VistaCursos />} />
        <Route path="/cursos" element={<VistaCursos/>} />
        <Route path="/foro" element={<VistaForo/>} />
      </Routes>
      <Footer />
    </Router>
  );
} 





