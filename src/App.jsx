// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './componentes/home/index.jsx';
import Lista from './componentes/lista/index.jsx';
import Filtro from './componentes/filtro/index.jsx';
import Buscador from './componentes/buscador/index.jsx';
import Detalles from './componentes/detalles/index.jsx';
import Informativa from './componentes/informativa/index.jsx';

function App() {
  return (
    <Router>
      <nav className="c-menu">
        <Link to="/">Home</Link>
        <Link to="/lista">Lista</Link>
        <Link to="/filtro">Filtro</Link>
        <Link to="/buscador">Buscador</Link>
        <Link to="/informativa">Informativa</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/filtro" element={<Filtro />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="/informativa" element={<Informativa />} />
      </Routes>
    </Router>
  );
}

export default App;