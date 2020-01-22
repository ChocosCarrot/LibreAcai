const express = require('express');

const routes = express.Router();

routes.get('/', (require, response) => {
    return response.send('Hello world');
});

module.exports = routes;