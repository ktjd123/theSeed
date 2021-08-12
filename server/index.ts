// const express = require('express');
import express, { ErrorRequestHandler } from 'express';

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import next from 'next';

import compression from 'compression';
import morgan from 'morgan';

import MongoStore from 'connect-mongo';
import session from 'express-session';

import api from './routes';

const server = express();

const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });
const defaultRequestHandler = app.getRequestHandler();

const LOCAL_DB = 'theseed';
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${LOCAL_DB}`;
// const SESSION_KEY = "connect.sid";
const SESSION_SECRET = 'jfoiesofj@#JIFSIOfsjieo@320923';
const SESSION_DOMAIN = undefined;
const PORT = process.env.NODE_ENV === 'development' ? 80 : 3000;

app.prepare().then(async () => {
  // Parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }));
  // Parse application/json
  server.use(bodyParser.json());

  // Theseed Custom
  server.use(compression());
  server.use(morgan('dev'));

  // MongoDB
  // mongoose.set('debug', true);
  mongoose.Promise = global.Promise;
  const mongooseClient = await mongoose
    .connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: true,
      // poolSize: 1000,
    })
    .then((m) => m.connection.getClient())
    .catch(() => {
      console.error('DB NOT CONNECTED');
      process.exit();
    });

  // Session
  server.use(
    session({
      // key: SESSION_KEY,
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      cookie: {
        maxAge: 365 * (24 * 60 * 60 * 1000),
        domain: dev ? undefined : SESSION_DOMAIN,
      },
      store: MongoStore.create({
        client: mongooseClient,
        ttl: 365 * (24 * 60 * 60 * 1000),
      }),
    })
  );

  const errHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke');
  };

  server.use(errHandler);
  // API routes
  server.use('/api', api);

  // Next.js request handling
  const customRequestHandler = (page: any, req: any, res: any) => {
    // Both query and params will be available in getInitialProps({query})
    const mergedQuery = { ...req.query, ...req.params };
    app.render(req, res, page, mergedQuery);
  };

  server.get('*', (req, res) => {
    defaultRequestHandler(req, res);
  });

  server.use((err: any, req: express.Request, res: express.Response, next: any) => {
    console.error(err.stack);
    return res.status(500).json({ code: 0 });
  });

  server.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}/\nAPI running on http://localhost:${PORT}/api/`);
  });
});
