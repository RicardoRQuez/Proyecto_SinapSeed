import { VistaNoticias } from "./Componentes/VistaNoticias/VistaNoticias.jsx";
import { VistaHome } from "./Componentes/VistaHome/VistaHome.jsx"
import { MyNavbar } from "./Componentes/Navbar/Navbar.jsx";
import { VistaLogin } from "./Componentes/VistaLogIn/VistaLogin.jsx";
import { VistaCursos } from "./Componentes/VistaCursos/VistaCursos.jsx";  
import {Footer} from "./Componentes/ZFooter/FooterPagina.jsx"
import { CursosVistaTodos  } from "./Componentes/VistaHCursosGeneral/Listado/CursosVistaTodos.jsx"
import { VistaForo } from "./Componentes/VistaForo/VistaForo.jsx";
import { VistaRegistro } from "./Componentes/VistaRegistro/VistaRegistro.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/noticias" element={<VistaNoticias />} />
        <Route path="/" element={<VistaHome/>} />
        <Route path="/login" element={<VistaLogin/>} />
        <Route path="/cursos" element={<VistaCursos/>} />
        <Route path="/cursosGeneral" element={<CursosVistaTodos />} />
        <Route path="/foro" element={<VistaForo/>} />
        <Route path="/registro" element={<VistaRegistro/>}/>      
      </Routes>
      <Footer />
    </Router>
  );
} 

export default App;
