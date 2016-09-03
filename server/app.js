import path from 'path';
import express from 'express';
import noCache from 'connect-cache-control';

import routes from './routes';

const app = express();

app.use('/', (req, res) => {
  res.send('Hello from server!');
  console.log(res);
});

export default app;
