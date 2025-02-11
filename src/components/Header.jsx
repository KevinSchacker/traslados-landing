"use client"

import { useState } from "react"
import { getWhatsAppUrl } from "../utils/whatsapp"
import "../styles/Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <a href="/" className="logo">
            <img src="https://cdn-icons-png.freepik.com/512/4083/4083045.png" alt="Iguazú Traslados Logo" />
          </a>

          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <a href="#hero" className="nav-link">
              Inicio
            </a>
            <a href="#about" className="nav-link">
              Sobre Nosotros
            </a>
            <a href="#services" className="nav-link">
              Servicios
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="reserve-button">
              RESERVA AHORA
            </a>
          </nav>

          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

