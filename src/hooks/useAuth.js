import { useContext } from "react"
import { AuthContext } from "@/contexts/AuthContextDefinition"

export const useAuth = () => {
  const contexto = useContext(AuthContext)
  if (!contexto) {
    throw new Error("useAuth debe usarse dentro de AuthProvider")
  }
  return contexto
}
