import React from 'react';
import { match } from 'react-router';
import configureStore from '../shared/store';
import createRoutes from '../shared/routes';

// const store = configureStore();
// const routes = createRoutes(React);
// const initialState = store.getState();
//
// export default (req, res) => {
//   match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//     } else if (renderProps) {
//       //const rootMarkup = render(React)(renderProps, store);
//       res.status(200).send('Hello');
//     } else {
//       res.status(404).send('Not found');
//     }
//   });
// };
