// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';
import EquranApp from './components/EquranApp';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/style.css';


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <EquranApp />
  </BrowserRouter>
);
