export default function Footer() {
  return (
    <footer
      className="bg-light py-3 mt-auto border-top"
      style={{ marginTop: "auto" }}
    >
      <div className="container text-center">
        <small className="text-muted vend-sans-regular">
          © {new Date().getFullYear()} PowerFit. Todos los derechos reservados.
        </small>
      </div>
    </footer>
  )
}
