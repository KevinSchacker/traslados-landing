import { getWhatsAppUrl } from "../utils/whatsapp"
import "../styles/Services.css"

function Services() {
  const destinations = [
    {
      id: 1,
      title: "Cataratas del Iguazú - Lado Argentino",
      description:
        "Recorra las pasarelas y sienta la fuerza de las cataratas desde múltiples circuitos. Incluye el impresionante mirador de Garganta del Diablo.",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/0b/4a/a3.jpg",
    },
    {
      id: 2,
      title: "Cataratas del Iguazú - Lado Brasileño",
      description:
        "Disfrute de las mejores vistas panorámicas de las cataratas desde el lado brasileño, con un recorrido más corto pero igualmente impactante.",
      image: "https://lavozdecataratas.com/wp-content/uploads/2023/11/portada-noticias-2023-11-27T120338.935-1024x667.png",
    },
    {
      id: 3,
      title: "Parque das Aves",
      description:
        "Visite el mayor parque de aves de América Latina, hogar de más de 1.300 aves de 150 especies diferentes en su hábitat natural.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Parque_das_Aves%2C_Foz_do_Iguacu%2C_Brazil-12Feb2011.jpg",
    },
    {
      id: 4,
      title: "Hito Tres Fronteras",
      description:
        "Punto de encuentro de tres países: Argentina, Brasil y Paraguay. Disfrute de espectáculos culturales y vistas únicas al atardecer.",
      image: "https://images.myguide-cdn.com/argentina/companies/puerto-iguazu-hito-tres-fronters-and-la-aripica-city-tour/large/puerto-iguazu-hito-tres-fronters-and-la-aripica-city-tour-1152659.jpg",
    },
    {
      id: 5,
      title: "Ruinas de San Ignacio",
      description:
        "Explore las impresionantes ruinas jesuíticas, Patrimonio de la Humanidad por la UNESCO, testigo de la historia de las misiones.",
      image: "https://www.iguazuturismo.com.ar/img/1200/ruinas-san-ignacio.jpg",
    },
    {
      id: 6,
      title: "Güirá Oga",
      description:
        "Centro de rehabilitación de animales silvestres donde podrá conocer la fauna local y aprender sobre su conservación.",
      image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/06/guira-oga-cartel-e1591714265276.jpg?fit=583%2C325&ssl=1",
    },
    {
      id: 7,
      title: "La Aripuca",
      description:
        "Gigantesca trampa de pájaros transformada en centro cultural que muestra la cultura guaraní y la importancia de la conservación.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f3/3e/db/la-aripuca.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 8,
      title: "Minas de Wanda",
      description:
        "Descubra las famosas minas de piedras semipreciosas, donde podrá conocer el proceso de extracción y comprar artesanías.",
      image: "https://vazayatour.com.ar/wp-content/uploads/2024/09/pict0194-2.webp",
    },
    {
      id: 9,
      title: "Duty Free Shop",
      description:
        "Visite la zona franca de Puerto Iguazú para realizar compras libres de impuestos en una amplia variedad de productos internacionales.",
      image: "https://static.misionesonline.news/wp-content/uploads/2024/02/Carnaval-en-el-Duty-Free-Shop-Puerto-Iguazu-2.jpg",
    },
  ]

  return (
    <section id="services" className="services hidden">
      <div className="services-container">
        <h2 className="services-title">Nuestros Destinos</h2>
        <p className="services-subtitle">Descubre los lugares más increíbles de la región</p>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image-container">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.title}
                  className="destination-image"
                />
              </div>
              <div className="destination-content">
                <h3 className="destination-title">{destination.title}</h3>
                <p className="destination-description">{destination.description}</p>
                <a
                  href={getWhatsAppUrl(`Hola, me gustaría reservar un traslado a ${destination.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="destination-button"
                >
                  Reservar Ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

