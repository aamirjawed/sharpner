const http = require('http');
const routes = require('/routes')

const server = http.createServer

server.listen(3000, () => {
    console.log("Server is running");
});
