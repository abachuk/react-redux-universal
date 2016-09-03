import path from 'path';
import express from 'express';
import noCache from 'connect-cache-control';
import routes from './routes';
import Html from '../shared/html';
import http from 'http';
import createHistory from 'react-router/lib/createMemoryHistory';
import {Provider} from 'react-redux';
import { match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';

import createStore from '../shared/store';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from '../config';
import getRoutes from './routes';

const app = express();


// this is where server gets request from the browser and sends appropriate data back
app.use('/', (req, res) => {

  const memoryHistory = createHistory(req.originalUrl);
  const store = createStore(memoryHistory, {});
  const history = syncHistoryWithStore(memoryHistory, store);

  res.send('Hello from server!');
  match({ history, routes: getRoutes(store), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      loadOnServer({...renderProps, store, helpers: {client}}).then(() => {
        const component = (
          <Provider store={store} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </Provider>
        );

        res.status(200);

        global.navigator = {userAgent: req.headers['user-agent']};

        res.send('<!doctype html>\n' +
          ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store}/>));
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

export default app;
