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
  // Development: Redirect to Vite dev server
  app.get('/react-ui', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirection vers React App</title>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #f3f4f6; margin: 0; }
    .container { text-align: center; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 500px; }
    h1 { color: #1f2937; margin-bottom: 1rem; }
    p { color: #6b7280; margin-bottom: 1.5rem; }
    a { display: inline-block; background: #6366f1; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; }
    a:hover { background: #4f46e5; }
    .note { font-size: 0.875rem; color: #9ca3af; margin-top: 1rem; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 Application React - Icônes</h1>
    <p>L'application React est servie directement par Vite sur le port 5173</p>
    <a href="http://localhost:5173" target="_blank">Ouvrir l'application React</a>
    <p class="note">Note: En production, l'application sera servie via ce même chemin après le build</p>
  </div>
</body>
</html>
    `);
  });
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
