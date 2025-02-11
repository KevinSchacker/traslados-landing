import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Iguazú Traslados | Servicios de Transporte en Iguazú",
  description: "Servicio de traslados en Iguazú, Argentina, Brasil y Paraguay. Confort y seguridad garantizados.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

