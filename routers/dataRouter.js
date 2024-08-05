// routers/dataRouter.js

const url = require('url');
const dataController = require('../controllers/dataController');

const dataRouter = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method.toUpperCase();

    if (method === 'GET' && path === '/api/data') {
        dataController.getData(req, res);
    } else if (method === 'POST' && path === '/api/data') {
        dataController.postData(req, res);
    } else if (method === 'PUT' && path === '/api/data') {
        dataController.putData(req, res);
    } else if (method === 'DELETE' && path === '/api/data') {
        dataController.deleteData(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
};

module.exports = dataRouter;
