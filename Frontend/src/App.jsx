import { VistaNoticias } from "./Componentes/VistaNoticias/VistaNoticias.jsx";
import { VistaHome } from "./Componentes/VistaHome/VistaHome.jsx"
import { MyNavbar } from "./Componentes/Navbar/Navbar.jsx";
import { VistaLogin } from "./Componentes/VistaLogIn/VistaLogin.jsx";
import { VistaCursos } from "./Componentes/VistaCursos/VistaCursos.jsx";  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <MyNavbar />
      <VistaHome/>
      <Routes>
        <Route path="/noticias" element={<VistaNoticias />} />
        <Route path="/home" element={<VistaHome/>} />
        <Route path="/login" element={<VistaLogin/>} />
        <Route path="/cursos" element={<VistaCursos/>} />
      </Routes>
    </Router>
  );
}

export default App;
