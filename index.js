// index.js

const http = require('http');
const dataRouter = require('./routers/dataRouter');

const server = http.createServer((req, res) => {
    dataRouter(req, res);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
