import { productoApi } from "./api"

/**
 * Servicio para operaciones relacionadas con productos
 */
export const productoService = {
  /**
   * Obtener todos los productos
   */
  obtenerTodos: async () => {
    const response = await productoApi.get("/api/v1/productos")
    return response.data
  },

  /**
   * Obtener un producto por ID
   */
  obtenerPorId: async (id) => {
    const response = await productoApi.get(`/api/v1/productos/${id}`)
    return response.data
  },

  /**
   * Crear un nuevo producto
   */
  crear: async (producto) => {
    const response = await productoApi.post("/api/v1/productos", producto)
    return response.data
  },

  /**
   * Actualizar un producto existente
   */
  actualizar: async (id, producto) => {
    const response = await productoApi.put(`/api/v1/productos/${id}`, producto)
    return response.data
  },

  /**
   * Eliminar un producto
   */
  eliminar: async (id) => {
    const response = await productoApi.delete(`/api/v1/productos/${id}`)
    return response.data
  },

  /**
   * Buscar productos por nombre
   */
  buscarPorNombre: async (nombre) => {
    const response = await productoApi.get(`/api/v1/productos/nombre/${nombre}`)
    return response.data
  },

  /**
   * Obtener productos por categoría
   */
  obtenerPorCategoria: async (categoria) => {
    const response = await productoApi.get(
      `/api/v1/productos/categoria/${categoria}`
    )
    return response.data
  },

  /**
   * Obtener inventario de un producto
   */
  obtenerInventario: async (productoId) => {
    const response = await productoApi.get(
      `/api/v1/inventario/producto/${productoId}`
    )
    return response.data
  },

  /**
   * Actualizar stock de un producto
   */
  actualizarStock: async (productoId, cantidad) => {
    const response = await productoApi.put(
      `/api/v1/inventario/${productoId}/stock`,
      { cantidad }
    )
    return response.data
  },
}
