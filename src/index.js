import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { PokemonsProvider } from './contexts/pokemons.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonsProvider>
        <App />
      </PokemonsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
