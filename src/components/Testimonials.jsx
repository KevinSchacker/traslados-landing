'use client';

import { useState } from 'react'
import '../styles/Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      text: "Excelente servicio. El conductor fue muy amable y puntual. ¡Definitivamente los recomendaré!",
      rating: 5,
    },
    {
      id: 2,
      name: "John Smith",
      text: "Very professional service. The vehicle was clean and comfortable. Great experience overall!",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana Silva",
      text: "Ótimo atendimento e preços justos. Fiquei muito satisfeita com o serviço.",
      rating: 4,
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials hidden">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
        <div className="testimonial-carousel">
          <button className="carousel-button prev" onClick={prevTestimonial}>&lt;</button>
          <div className="testimonial-card">
            <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
            <p className="testimonial-author">- {testimonials[currentTestimonial].name}</p>
            <div className="testimonial-rating">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>
          <button className="carousel-button next" onClick={nextTestimonial}>&gt;</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
