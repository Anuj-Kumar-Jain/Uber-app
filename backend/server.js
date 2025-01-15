const http = require('http');
const app = require("./app.js");
const port = process.env.PORT || 3000;
    // "test": "echo \"Error: no test specified\" && exit 1"
const server = http.createServer(app);

server.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})