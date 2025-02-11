import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          © {currentYear} Servicios Traslados. Todos los derechos reservados.
        </p>
        <p className="creator-info">
          Sitio web creado por <a href="https://github.com/KevinSchacker" target="_blank" rel="noopener noreferrer">FullPc</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
