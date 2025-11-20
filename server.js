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
  // Create proxy middleware instance once (not per request)
  const viteProxy = createProxyMiddleware({
    target: 'http://localhost:5173',
    changeOrigin: true,
    pathRewrite: {
      '^/react-ui': ''
    },
    ws: true,
    logLevel: 'silent',
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Accept-Encoding', 'identity');
      proxyReq.setHeader('host', 'localhost:5173');
    }
  });
  
  // Custom middleware to inject base tag for HTML, then proxy to Vite
  app.use('/react-ui', async (req, res, next) => {
    // Only intercept HTML requests (root path)
    if (req.path === '/' || req.path === '/index.html') {
      try {
        const response = await fetch('http://localhost:5173/');
        let html = await response.text();
        
        // Inject base tag after <head>
        html = html.replace('<head>', '<head>\n    <base href="/react-ui/">');
        
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Cache-Control', 'no-cache');
        res.send(html);
      } catch (error) {
        console.error('Error fetching HTML from Vite:', error);
        res.status(500).send('Error loading React app');
      }
    } else {
      // Proxy all other requests to Vite using the shared instance
      viteProxy(req, res, next);
    }
  });
} else {
  // Production: Serve built React app from dist
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
