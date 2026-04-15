const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// Get local IP
const os = require("os");
const networkInterfaces = os.networkInterfaces();
let localIP = "localhost";

for (const iface of Object.values(networkInterfaces)) {
  for (const details of iface) {
    if (details.family === "IPv4" && !details.internal) {
      localIP = details.address;
    }
  }
}

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;

  if (filePath === "./") {
    filePath = "./index.html";
  }

  const extname = path.extname(filePath);

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".ico": "image/x-icon"
  };

  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`👉 http://${localIP}:${PORT}  (for mobile)`);
});