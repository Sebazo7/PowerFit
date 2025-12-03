import axios from 'axios';

export default async function handler(req, res) {
  const base = 'http://52.0.134.157:8082';
  const path = req.url.replace(/^\/api\/usuario/, '');
  const url = `${base}${path || ''}`;

  try {
    const response = await axios({
      method: req.method,
      url,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.authorization ? { Authorization: req.headers.authorization } : {}),
      },
      data: req.body,
      validateStatus: () => true,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(500).json({ mensaje: 'Proxy error usuario', detalle: err.message });
  }
}
