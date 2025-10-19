import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(null)

export const useAuth = () => {
  const contexto = useContext(AuthContext)
  if (!contexto) {
    throw new Error("useAuth debe usarse dentro de AuthProvider")
  }
  return contexto
}

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
  const iniciarSesion = (email, password) => {
    // Simulación de autenticación (reemplazar con llamada real a API)
    const usuariosRegistrados = JSON.parse(
      localStorage.getItem("usuarios") || "[]"
    )
    const usuarioEncontrado = usuariosRegistrados.find(
      (u) => u.email === email && u.password === password
    )

    if (usuarioEncontrado) {
      // eslint-disable-next-line no-unused-vars
      const { password, ...usuarioSinPassword } = usuarioEncontrado
      setUsuario(usuarioSinPassword)
      localStorage.setItem("usuario", JSON.stringify(usuarioSinPassword))
      return { exito: true, mensaje: "Sesión iniciada correctamente" }
    }

    return { exito: false, mensaje: "Email o contraseña incorrectos" }
  }

  // Registrar nuevo usuario
  const registrarUsuario = (datosUsuario) => {
    const usuariosRegistrados = JSON.parse(
      localStorage.getItem("usuarios") || "[]"
    )

    // Verificar si el email ya existe
    if (usuariosRegistrados.some((u) => u.email === datosUsuario.email)) {
      return { exito: false, mensaje: "El email ya está registrado" }
    }

    // Agregar nuevo usuario
    const nuevoUsuario = {
      id: Date.now().toString(),
      ...datosUsuario,
      fechaRegistro: new Date().toISOString(),
    }

    usuariosRegistrados.push(nuevoUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados))

    // Iniciar sesión automáticamente
    // eslint-disable-next-line no-unused-vars
    const { password, ...usuarioSinPassword } = nuevoUsuario
    setUsuario(usuarioSinPassword)
    localStorage.setItem("usuario", JSON.stringify(usuarioSinPassword))

    return { exito: true, mensaje: "Usuario registrado correctamente" }
  }

  // Cerrar sesión
  const cerrarSesion = () => {
    setUsuario(null)
    localStorage.removeItem("usuario")
  }

  // Actualizar perfil
  const actualizarPerfil = (datosActualizados) => {
    const usuariosRegistrados = JSON.parse(
      localStorage.getItem("usuarios") || "[]"
    )
    const indice = usuariosRegistrados.findIndex((u) => u.id === usuario.id)

    if (indice !== -1) {
      // Mantener la contraseña anterior si no se proporciona una nueva
      const usuarioActualizado = {
        ...usuariosRegistrados[indice],
        ...datosActualizados,
        password:
          datosActualizados.password || usuariosRegistrados[indice].password,
      }

      usuariosRegistrados[indice] = usuarioActualizado
      localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados))

      // eslint-disable-next-line no-unused-vars
      const { password, ...usuarioSinPassword } = usuarioActualizado
      setUsuario(usuarioSinPassword)
      localStorage.setItem("usuario", JSON.stringify(usuarioSinPassword))

      return { exito: true, mensaje: "Perfil actualizado correctamente" }
    }

    return { exito: false, mensaje: "Error al actualizar el perfil" }
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
