import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './component/Navbar';
import Hero from './pages/Hero';
import Project from './pages/Project';
import Design from './pages/Design';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Project />
    <Design />
  </React.StrictMode>
);

reportWebVitals();
