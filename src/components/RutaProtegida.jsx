import { Navigate } from "react-router-dom"
import { useAuth } from "@hooks/useAuth"

const RutaProtegida = ({ children }) => {
  const { estaAutenticado, cargando } = useAuth()

  if (cargando) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default RutaProtegida
