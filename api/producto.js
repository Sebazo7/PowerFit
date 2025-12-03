export default async function handler(req, res) {
  // Importar axios dinámicamente para Vercel
  const axios = (await import('axios')).default;
  
  const base = 'http://52.0.134.157:8081';
  const path = req.url.replace(/^\/api\/producto/, '');
  const url = `${base}${path}`;

  console.log(`[Producto Proxy] ${req.method} ${url}`);

  try {
    const response = await axios({
      method: req.method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: req.body,
      validateStatus: () => true,
    });
    
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error('[Producto Proxy Error]', err.message);
    res.status(500).json({ mensaje: 'Error en proxy de producto', detalle: err.message });
  }
}
