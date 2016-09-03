import path from 'path';
import express from 'express';
import noCache from 'connect-cache-control';
import log from './log';

import routes from './routes';

const app = express();

app.use(log.requestLogger());

app.get('/log.gif/:message', noCache, log.route());

app.use('/', routes);

export default app;
