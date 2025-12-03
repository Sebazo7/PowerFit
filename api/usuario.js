export default async function handler(req, res) {
  // Importar axios dinámicamente para Vercel
  const axios = (await import('axios')).default;
  
  const base = 'http://52.0.134.157:8082';
  const path = req.url.replace(/^\/api\/usuario/, '');
  const url = `${base}/api/v1/usuarios${path}`;

  console.log(`[Usuario Proxy] ${req.method} ${url}`);
  console.log('[Usuario Proxy] Body:', JSON.stringify(req.body));

  try {
    const response = await axios({
      method: req.method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: req.method !== 'GET' ? req.body : undefined,
      validateStatus: () => true,
    });
    
    console.log(`[Usuario Proxy] Response status: ${response.status}`);
    console.log('[Usuario Proxy] Response data:', JSON.stringify(response.data));
    
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error('[Usuario Proxy Error]', err.message);
    console.error('[Usuario Proxy Error Stack]', err.stack);
    res.status(500).json({ 
      mensaje: 'Error en proxy de usuario', 
      detalle: err.message,
      url: url 
    });
  }
}
