import axios from "axios"

// Detectar si estamos en Vercel (dominio vercel.app) para usar proxy HTTPS
const isVercel =
  typeof window !== "undefined" && /vercel\.app$/.test(window.location.hostname)

// URLs base
const API_BASE_URL_PRODUCTO = isVercel
  ? "/api/producto"
  : "http://52.0.134.157:8081"
const API_BASE_URL_USUARIO = isVercel
  ? "/api/usuario"
  : "http://52.0.134.157:8082"

// Instancia de axios para el microservicio de productos
export const productoApi = axios.create({
  baseURL: API_BASE_URL_PRODUCTO,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

// Instancia de axios para el microservicio de usuarios
export const usuarioApi = axios.create({
  baseURL: API_BASE_URL_USUARIO,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

// Interceptor para manejar errores globalmente
const errorInterceptor = (error) => {
  if (error.response) {
    // Error de respuesta del servidor
    console.error("Error de respuesta:", error.response.data)
    console.error("Status:", error.response.status)
  } else if (error.request) {
    // Error de petición sin respuesta
    console.error("Error de petición:", error.request)
  } else {
    // Error en la configuración de la petición
    console.error("Error:", error.message)
  }
  return Promise.reject(error)
}

// Aplicar interceptor a ambas instancias
productoApi.interceptors.response.use((response) => response, errorInterceptor)

usuarioApi.interceptors.response.use((response) => response, errorInterceptor)

// Interceptor para agregar token de autenticación si existe
const authInterceptor = (config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

productoApi.interceptors.request.use(authInterceptor)
usuarioApi.interceptors.request.use(authInterceptor)
