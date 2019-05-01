const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('This is middleware!!!');
    res.send('<h1>Product route</h1>')
});

app.use('/', (req, res, next) => {
    console.log('Another middleware');
    res.send('<h1>Root route</h1>')
});

const server = http.createServer(app);

server.listen(5000);
