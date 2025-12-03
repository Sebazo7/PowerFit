/**
 * Convierte una URL HTTP a HTTPS para evitar mixed content warnings
 * @param {string} url - URL de la imagen
 * @returns {string} URL segura con HTTPS
 */
export const toSecureUrl = (url) => {
  if (!url) return ""
  
  // Si ya es HTTPS, retornar tal cual
  if (url.startsWith("https://")) return url
  
  // Si es HTTP, convertir a HTTPS
  if (url.startsWith("http://")) {
    return url.replace("http://", "https://")
  }
  
  // Si es una ruta relativa o sin protocolo, asumimos que ya está bien
  return url
}
