import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/regras">Regras</Link>
        </li>
        <li>
          <Link to="/como-jogar">Como Jogar</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default App;
