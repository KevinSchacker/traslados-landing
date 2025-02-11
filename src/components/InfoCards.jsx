import "../styles/InfoCards.css"

function InfoCards() {
  return (
    <div className="info-cards">
      <div className="card">
        <div className="card-content">
          <div className="card-icon phone-icon"></div>
          <div className="card-text">
            <p className="card-subtitle">Contactanos ahora mismo</p>
            <p className="card-title">54 3755 000000 </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-icon star-icon"></div>
          <div className="card-text">
            <p className="card-subtitle">Confort y seguridad</p>
            <p className="card-title">Servicio 5 estrellas</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-icon clock-icon"></div>
          <div className="card-text">
            <p className="card-subtitle">Años de experiencia</p>
            <p className="card-title">Más de 10 años</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCards

