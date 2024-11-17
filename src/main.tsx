import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteName } from './core/helper.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      basename={RouteName.prefix}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
