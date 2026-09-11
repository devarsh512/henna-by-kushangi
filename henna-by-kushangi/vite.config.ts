import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, type Plugin } from 'vite';

function permanentPhotoSaverPlugin(): Plugin {
  return {
    name: 'permanent-photo-saver',
    configureServer(server) {
      // Serve /images directly with proper MIME types
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/images/')) {
          const filename = req.url.replace('/images/', '').split('?')[0];
          const filePath = path.resolve(process.cwd(), 'public/images', filename);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes: Record<string, string> = {
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.png': 'image/png',
              '.svg': 'image/svg+xml',
              '.webp': 'image/webp',
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });

      server.middlewares.use('/api/save-photo', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const { filename, base64Data } = data;

            if (!filename || !base64Data) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'filename and base64Data required' }));
              return;
            }

            const imagesDir = path.resolve(process.cwd(), 'public/images');
            if (!fs.existsSync(imagesDir)) {
              fs.mkdirSync(imagesDir, { recursive: true });
            }

            // Remove header like "data:image/jpeg;base64,"
            const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(cleanBase64, 'base64');
            const targetPath = path.join(imagesDir, filename);

            fs.writeFileSync(targetPath, buffer);
            console.log(`[PermanentPhotoSaver] Saved ${filename} (${buffer.length} bytes) to ${targetPath}`);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, filename, path: `/images/${filename}` }));
          } catch (err) {
            console.error('[PermanentPhotoSaver] Error saving photo:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: String(err) }));
          }
        });
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), permanentPhotoSaverPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
