const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;


const server = http.createServer((req, res) => {
  let filePath = '';
  
  switch (req.url) {
    case '/index':
      filePath = path.join(__dirname, 'public', 'index.html');
      break;
    case '/about':
      filePath = path.join(__dirname, 'public', 'about.html');
      break;
    case '/contact':
      filePath = path.join(__dirname, 'public', 'contact.html');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Error 404: Pagina no encontrada</h1>');
      return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Error 500: Error interno del servidor</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
