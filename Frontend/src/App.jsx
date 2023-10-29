import { VistaNoticias } from "./Componentes/VistaNoticias/VistaNoticias.jsx";
import { VistaHome } from "./Componentes/VistaHome/VistaHome.jsx"
import { MyNavbar } from "./Componentes/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/Noticias" element={<VistaNoticias />} />
        <Route path="/Home" element={<VistaHome/>} />
      </Routes>
    </Router>
  );
}

export default App;
