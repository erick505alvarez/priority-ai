// create server
const http = require("http");
const app = require("./app");

const port = process.env.PORT || 5000;
app.set(port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
