import { useState, useEffect } from "react"
import { AuthContext } from "./AuthContextDefinition"
import { usuarioService } from "../services"

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null)
  const [cargando, setCargando] = useState(true)

  // Cargar usuario del localStorage al iniciar
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario")
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado))
    }
    setCargando(false)
  }, [])

  // Iniciar sesión
  const iniciarSesion = async (email, password) => {
    try {
      const resultado = await usuarioService.login(email, password)
      
      if (resultado) {
        setUsuario(resultado)
        localStorage.setItem("usuario", JSON.stringify(resultado))
        return { exito: true, mensaje: "Sesión iniciada correctamente" }
      }
      
      return { exito: false, mensaje: "Email o contraseña incorrectos" }
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
      return { exito: false, mensaje: error.response?.data?.mensaje || "Error al iniciar sesión" }
    }
  }

  // Registrar nuevo usuario
  const registrarUsuario = async (datosUsuario) => {
    try {
      // Mapear campos del formulario a los campos de la API
      const datosParaAPI = {
        nombre: datosUsuario.nombre,
        apellidos: datosUsuario.apellido,
        email: datosUsuario.email,
        contrasena: datosUsuario.password,
        rol: "CLIENTE",
        estado: true
      }

      const resultado = await usuarioService.registrar(datosParaAPI)
      
      if (resultado) {
        // Iniciar sesión automáticamente
        setUsuario(resultado)
        localStorage.setItem("usuario", JSON.stringify(resultado))
        return { exito: true, mensaje: "Usuario registrado correctamente" }
      }
      
      return { exito: false, mensaje: "Error al registrar usuario" }
    } catch (error) {
      console.error("Error al registrar usuario:", error)
      const mensaje = error.response?.data?.mensaje || "Error al registrar usuario"
      return { exito: false, mensaje }
    }
  }

  // Cerrar sesión
  const cerrarSesion = () => {
    usuarioService.logout()
    setUsuario(null)
    localStorage.removeItem("usuario")
  }

  // Actualizar perfil
  const actualizarPerfil = async (datosActualizados) => {
    try {
      if (!usuario?.id) {
        return { exito: false, mensaje: "No hay usuario autenticado" }
      }

      const datosParaAPI = {
        nombre: datosActualizados.nombre,
        apellidos: datosActualizados.apellido || datosActualizados.apellidos,
        email: datosActualizados.email,
        ...(datosActualizados.password && { contrasena: datosActualizados.password }),
        ...(datosActualizados.telefono && { telefono: datosActualizados.telefono }),
        ...(datosActualizados.direccion && { direccion: datosActualizados.direccion }),
      }

      const resultado = await usuarioService.actualizar(usuario.id, datosParaAPI)
      
      if (resultado) {
        setUsuario(resultado)
        localStorage.setItem("usuario", JSON.stringify(resultado))
        return { exito: true, mensaje: "Perfil actualizado correctamente" }
      }

      return { exito: false, mensaje: "Error al actualizar el perfil" }
    } catch (error) {
      console.error("Error al actualizar perfil:", error)
      return { exito: false, mensaje: error.response?.data?.mensaje || "Error al actualizar el perfil" }
    }
  }

  const valor = {
    usuario,
    cargando,
    iniciarSesion,
    registrarUsuario,
    cerrarSesion,
    actualizarPerfil,
    estaAutenticado: !!usuario,
  }

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
}
