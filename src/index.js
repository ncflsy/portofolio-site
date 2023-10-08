import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './component/Navbar'
import Hero from './pages/Hero';
import Project from './pages/Project';
import Design from './pages/Design';
import Pictures from './pages/Pictures';
import Writing from './pages/Writing';
import Footer from './pages/Footer';
import Profile from './pages/Profile';
import Skill from './pages/Skill';
import Hobby from './pages/Hobby';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <NavbarRoutes/> */}
      <Navbar/>
      <Hero/>
      <Profile/>
      <Skill/>
      <Project />
      <Design />
      <Pictures />
      <Writing />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
