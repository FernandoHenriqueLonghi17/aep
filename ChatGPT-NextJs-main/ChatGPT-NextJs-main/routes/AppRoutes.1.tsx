import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from 'pages/cadastro';
import Index from 'pages/index';

export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}