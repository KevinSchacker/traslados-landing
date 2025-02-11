export function getWhatsAppUrl(message = "Hola, me gustaría hacer una reserva, con destino a ") {
  const phoneNumber = "5493755000000" // Replace with your actual WhatsApp number
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

