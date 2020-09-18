const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const db = require('../database/dbConfig');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'when there is a doubt, there is no doubt',
    store: new KnexSessionStore({
        knex: db,
        createtable: true,
    }),
}));

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);
    //post to /api/auth/register --> register new user
    //post to /api/auth/login --> login user
    //get to /api/jokes --> runs authenticate middleware --  once authenticated, retrieves jokes
server.use((err, req, res, next) => {
    console.log(err);

    res.status(500).json({
        message: 'Something went wrong.'
    });
});

module.exports = server;
