"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import InfoCards from "./components/InfoCards"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import WhatsAppButton from "./components/WhatsAppButton"
import Footer from "./components/Footer"
import "./styles/App.css"

function App() {
  const [language, setLanguage] = useState("es")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <Hero />
      <InfoCards />
      <About />
      <Services />
      <Testimonials />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App

