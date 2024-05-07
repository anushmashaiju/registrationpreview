// src/App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import PreviewPage from './PreviewPage';

function App() {
  return (
    <BrowserRouter>
  <Routes>
         <Route path='/'element={<RegistrationForm/>}/>
    
      <Route path="/preview" element={<PreviewPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
