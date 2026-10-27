import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FooterPart from './components/footer.tsx'
import HeaderPart from './components/header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderPart />
    <App />
    <FooterPart />
  </StrictMode>,
)
