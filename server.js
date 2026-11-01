import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8080;
const CONTACTS_FILE = path.join(__dirname, 'contacts.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Decode URL and normalize path
  const safeUrl = decodeURI(req.url.split('?')[0]);

  // API Route: Contact Form Inquiries
  if (safeUrl === '/api/contact') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
        // Prevent flood attacks (> 1MB)
        if (body.length > 1e6) {
          req.destroy();
        }
      });

      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          const { name, email, service, timeline, message } = data;

          if (!name || !email || !message) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Name, email, and message are required.' }));
            return;
          }

          const submission = {
            id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            createdAt: new Date().toISOString(),
            name: String(name).trim(),
            email: String(email).trim(),
            service: String(service || 'General Project').trim(),
            timeline: String(timeline || 'Flexible').trim(),
            message: String(message).trim()
          };

          // Read existing contacts
          let contacts = [];
          if (fs.existsSync(CONTACTS_FILE)) {
            try {
              const fileContent = fs.readFileSync(CONTACTS_FILE, 'utf-8');
              contacts = JSON.parse(fileContent || '[]');
            } catch {
              contacts = [];
            }
          }

          contacts.unshift(submission);
          fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8');

          // Log to terminal for Salman
          console.log('\n' + '━'.repeat(55));
          console.log('📬 NEW CONTACT INQUIRY RECEIVED!');
          console.log(`👤 Name:     ${submission.name}`);
          console.log(`✉️  Email:    ${submission.email}`);
          console.log(`💼 Service:  ${submission.service}`);
          console.log(`⏳ Timeline: ${submission.timeline}`);
          console.log(`📝 Message:  ${submission.message}`);
          console.log(`🕒 Received: ${new Date().toLocaleString()}`);
          console.log(`💾 Saved to: contacts.json (Total inquiries: ${contacts.length})`);
          console.log('━'.repeat(55) + '\n');

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: true,
            message: 'Inquiry received and saved successfully!',
            submissionId: submission.id
          }));
        } catch (parseErr) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON payload.' }));
        }
      });
      return;
    } else if (req.method === 'GET') {
      let contacts = [];
      if (fs.existsSync(CONTACTS_FILE)) {
        try {
          contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8') || '[]');
        } catch {
          contacts = [];
        }
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ count: contacts.length, contacts }));
      return;
    }
  }

  // Static File Serving
  let filePath = path.join(__dirname, safeUrl === '/' ? 'index.html' : safeUrl);

  // Security check to prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`404 Not Found: ${safeUrl}`);
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`500 Server Error: ${readErr.message}`);
        return;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n✦ Salman Rasheed M. — Portfolio Server Running!`);
  console.log(`👉 Local:       http://localhost:${PORT}`);
  console.log(`📬 Inquiries:   http://localhost:${PORT}/api/contact`);
  console.log(`Press Ctrl+C to stop.\n`);
});
