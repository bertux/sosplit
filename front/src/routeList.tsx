// src/components/RouteList.tsx
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { StatisticsPage } from './pages/statisticsPage';
import { NotFoundPage } from './pages/notFoundPage';
import Navbar from './components/navbar';

export const RouteList = () => (
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stats" element={<StatisticsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
