import path from 'path';
import express from 'express';
import noCache from 'connect-cache-control';
import routes from './routes';

import React from 'react';
import ReactDOM from 'react-dom/server';
import config from '../config';

const app = express();

// this is where server gets request from the browser and sends appropriate data back
app.use('/', (req, res) => {
  res.send('Hello from server!');
  console.log(res);
});

export default app;
