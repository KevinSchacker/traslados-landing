import { getWhatsAppUrl } from "../utils/whatsapp"
import "../styles/Hero.css"

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">CONFIANZA Y SEGURIDAD SIEMPRE</p>
        <h1 className="hero-title">Traslados en Iguazú</h1>
        <p className="hero-description">ARGENTINA – BRASIL – PARAGUAY</p>
        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hero-button">
          RESERVA AHORA
        </a>
      </div>
    </section>
  )
}

export default Hero

