import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Sobre from './pages/Sobre.jsx';
import Regras from './pages/Regras';
import ComoJogar from './pages/ComoJogar';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/regras" element={<Regras />} />
        <Route path="/como-jogar" element={<ComoJogar />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
