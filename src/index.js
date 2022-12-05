import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Routes to pages
import DevPage from './pages/DevPage';
import OpsPage from './pages/OpsPage';
import HlpPage from './pages/HlpPage';
import AppPage from './pages/AppPage';
import Unternehmen from './pages/Unternehmen';
import Karriere from './pages/Karriere';
import Hooks from './pages/Hooks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/dev' element={<DevPage />} />
      <Route path='/ops' element={<OpsPage />} />
      <Route path='/hlp' element={<HlpPage />} />
      <Route path='/app' element={<AppPage />} />
      <Route path='/unternehmen' element={<Unternehmen />} />
      <Route path='/karriere' element={<Karriere />} />
      <Route path='/hooks' element={<Hooks />} />
    </Routes>


  </BrowserRouter>

);

