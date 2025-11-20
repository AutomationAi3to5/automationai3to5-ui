import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const isDev = process.env.NODE_ENV !== 'production';

// Serve static files (CSS, images, HTML)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));

if (isDev) {
  // Development: Proxy all requests starting with /react-ui to Vite dev server
  app.use('/react-ui', createProxyMiddleware({
    target: 'http://localhost:5173',
    changeOrigin: true,
    pathRewrite: {
      '^/react-ui': ''  // Remove /react-ui prefix before forwarding to Vite
    },
    ws: true,
    logLevel: 'silent',
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Accept-Encoding', 'identity');
    },
    onProxyRes: (proxyRes, req, res) => {
      // Rewrite location headers if any
      if (proxyRes.headers['location']) {
        proxyRes.headers['location'] = proxyRes.headers['location'].replace(/^\//, '/react-ui/');
      }
    }
  }));
} else {
  // Production: Serve built React app
  const reactDistPath = path.join(__dirname, 'react-ui', 'dist');
  if (existsSync(reactDistPath)) {
    app.use('/react-ui', express.static(reactDistPath));
  }
}

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'design-system.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Design System server running on http://0.0.0.0:${PORT}`);
  console.log(`   Mode: ${isDev ? 'Development' : 'Production'}`);
});
