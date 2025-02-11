import "../styles/About.css"

function About() {
  const vehicles = [
    {
      id: 1,
      name: "Sedan Ejecutivo",
      description: "Perfecto para viajes de negocios o parejas. Cómodo y elegante.",
      capacity: "4 pasajeros",
      image: "https://resizer.glanacion.com/resizer/v2/la-entrada-de-gama-del-fiat-cronos-incluida-en-el-7S7HDGD22NHFZH55LLBWH2ZEC4.jpg?auth=b089c10a87cdd02d0058dc31efed2ad003445bbcb17f54d95ae317a2f6905518&width=768&quality=70&smart=false",
    },
    {
      id: 2,
      name: "SUV Familiar",
      description: "Ideal para familias o grupos pequeños. Espacioso y versátil.",
      capacity: "6 pasajeros",
      image: "https://resizer.iproimg.com/unsafe/filters:format(webp):quality(70)/https://assets.iprofesional.com/assets/jpg/2024/05/574511.jpg",
    },
    {
      id: 3,
      name: "Van de Lujo",
      description: "Para grupos grandes. Máximo confort en viajes largos.",
      capacity: "12 pasajeros",
      image: "https://www.mercedes-benz.com.ar/content/dam/argentina/vans/model-overview/vito/Vito_Mixto_Plus.jpeg/1736456651014.jpg?im=Resize=(512);Crop,rect=(64,0,384,288)",
    },
  ]

  return (
    <section id="about" className="about hidden">
      <div className="container">
        <h2 className="about-title">Sobre Nosotros</h2>
        <p className="about-description">
          Somos una empresa líder en traslados en la región de Iguazú, ofreciendo servicios de alta calidad y
          confiabilidad. Con años de experiencia, nos enorgullecemos de brindar a nuestros clientes una experiencia de
          viaje segura y cómoda.
        </p>
        <p className="about-description">
          Nuestro equipo está compuesto por profesionales altamente capacitados y comprometidos con la excelencia en el
          servicio al cliente. Conocemos cada rincón de Iguazú y estamos listos para hacer de su visita una experiencia
          inolvidable.
        </p>

        <div className="vehicle-showcase">
          <h3 className="vehicle-showcase-title">Nuestra Flota</h3>
          <div className="vehicle-grid">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card">
                <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} className="vehicle-image" />
                <div className="vehicle-info">
                  <h4 className="vehicle-name">{vehicle.name}</h4>
                  <p className="vehicle-description">{vehicle.description}</p>
                  <p className="vehicle-capacity">Capacidad: {vehicle.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

