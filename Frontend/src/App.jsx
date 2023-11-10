import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { VistaHome } from "./Componentes/VistaHome/VistaHome.jsx"
import { MyNavbar } from "./Componentes/Navbar/Navbar.jsx";
import { VistaLogin } from "./Componentes/VistaLogIn/VistaLogin.jsx";
import {Footer} from "./Componentes/ZFooter/FooterPagina.jsx"
import { VistaForo } from "./Componentes/VistaForo/VistaForoCorregido.jsx";
import { VistaRegistro } from "./Componentes/VistaRegistro/VistaRegistro.jsx";
import { VistaCursoGen } from "./Componentes/VistaCursoGen/VistaCursoGen.jsx"
import {VistaNoticias} from "./Componentes/VistaNoticias/VistaNoticias.jsx"
import {VistaCursos} from "./Componentes/VistaCursos/VistaCursos.jsx"



export function App() {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <Router>
   
      <MyNavbar setShowLogin={setShowLogin} />
      {showLogin && <VistaLogin />}
      <Routes>        
        {/*<Route path="/noticias" element={<VistaNoticias />} />*/}
        <Route path="/" element={<VistaHome/>} />
        <Route path="/login" element={<VistaLogin/>} />
        <Route path="/foro" element={<VistaForo/>} />
        <Route path="/registro" element={<VistaRegistro/>}/>      
        <Route path="/cursosGen" element={<VistaCursoGen/>} />
        <Route path="/noticias" element={<VistaNoticias />} />
        <Route path="/cursos" element={<VistaCursos />} />
        <Route path="/foro" element={<VistaForo/>} />
      </Routes>
      <Footer />
    </Router>
  );
} 