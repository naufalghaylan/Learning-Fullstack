import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      {/* Define your routes here */}
      <Route index  element={<App />} />
    </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
)
