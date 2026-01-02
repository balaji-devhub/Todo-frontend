import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import LoginPage from './components/LoginPage/index.jsx'
import Register from './components/AddAccountPage/index.jsx'
import Protectrouter from './components/ProtectRouters/RouteProtector.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<LoginPage />} />

        {/* 🔐 Protected Route */}
        <Route
          path="/"
          element={
            <Protectrouter>
              <App />
            </Protectrouter>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
