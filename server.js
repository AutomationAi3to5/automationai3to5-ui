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

// Serve static files (CSS, images, HTML, components, stories, playground)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/components', express.static(path.join(__dirname, 'components html-sandboxes')));
app.use('/stories', express.static(path.join(__dirname, 'stories')));
app.use('/playground', express.static(path.join(__dirname, 'playground')));

if (isDev) {
  // Proxy configuration that preserves the /react-ui path
  const viteProxy = createProxyMiddleware({
    target: 'http://localhost:5173',
    changeOrigin: true,
    ws: true,
    logLevel: 'silent'
  });
  
  // Use app.use with filter function to preserve path
  app.use((req, res, next) => {
    if (req.path.startsWith('/react-ui')) {
      return viteProxy(req, res, next);
    }
    next();
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
