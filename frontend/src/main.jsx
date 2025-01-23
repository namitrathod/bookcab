import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'
import { DriverContextProvider } from './context/DriverContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DriverContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </DriverContextProvider>
  </StrictMode>,
)
