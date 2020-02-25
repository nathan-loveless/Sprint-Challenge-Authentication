const express = require('express');
const session = require('express-session');
const apiRouter = require('./api-router');
const configureMiddleware = require('./configure-middleware.js');


const server = express();
const sessionConfig = {
    name: 'coding',
    secret: 'we are all secrets',
    cookie: {
        maxAge: 1000 * 100,
        secure: false, 
        httpOnly: true,
    },
     resave: false,
     saveUninitialized: false,
};

configureMiddleware(server);
server.use(session(sessionConfig));
server.use('/api', apiRouter);


module.exports = server;
