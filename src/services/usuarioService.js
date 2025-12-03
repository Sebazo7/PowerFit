import { usuarioApi } from "./api"

/**
 * Servicio para operaciones relacionadas con usuarios
 */
export const usuarioService = {
  /**
   * Registrar un nuevo usuario
   */
  registrar: async (datosUsuario) => {
    const response = await usuarioApi.post("/api/v1/usuarios", datosUsuario)
    return response.data
  },

  /**
   * Iniciar sesión
   */
  login: async (email, contrasena) => {
    try {
      const response = await usuarioApi.post('/api/v1/usuarios/login', {
        email,
        contrasena
      })
      
      return response.data
    } catch (error) {
      if (error.response?.status === 401) {
        throw new Error('Email o contraseña incorrectos')
      }
      throw error
    }
  },

  /**
   * Cerrar sesión
   */
  logout: () => {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
  },

  /**
   * Obtener todos los usuarios
   */
  obtenerTodos: async () => {
    const response = await usuarioApi.get("/api/v1/usuarios")
    return response.data
  },

  /**
   * Obtener un usuario por ID
   */
  obtenerPorId: async (id) => {
    const response = await usuarioApi.get(`/api/v1/usuarios/id/${id}`)
    return response.data
  },

  /**
   * Obtener un usuario por email
   */
  obtenerPorEmail: async (email) => {
    const response = await usuarioApi.get(`/api/v1/usuarios/${email}`)
    return response.data
  },

  /**
   * Actualizar usuario
   */
  actualizar: async (id, datosUsuario) => {
    const response = await usuarioApi.put(
      `/api/v1/usuarios/${id}/actualizar`,
      datosUsuario
    )
    return response.data
  },

  /**
   * Cambiar estado del usuario (activar/desactivar)
   */
  cambiarEstado: async (id, estado) => {
    const response = await usuarioApi.patch(
      `/api/v1/usuarios/${id}/estado`,
      estado
    )
    return response.data
  },

  /**
   * Eliminar usuario
   */
  eliminar: async (id) => {
    const response = await usuarioApi.delete(`/api/v1/usuarios/${id}`)
    return response.data
  },

  /**
   * Obtener usuarios por nombre
   */
  buscarPorNombre: async (nombre) => {
    const response = await usuarioApi.get(`/api/v1/usuarios/nombre/${nombre}`)
    return response.data
  },

  /**
   * Obtener usuarios por estado
   */
  obtenerPorEstado: async (estado) => {
    const response = await usuarioApi.get(`/api/v1/usuarios/estado/${estado}`)
    return response.data
  },
}
