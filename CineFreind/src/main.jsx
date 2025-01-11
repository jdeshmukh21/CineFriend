import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>
);
