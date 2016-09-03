import { createStore, applyMiddleware, compose } from 'redux';
import indexReducer from './redux/reducers/index';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

export default function configureStore(initialState) {
  let store = createStore(rootReducer, initialState, compose(
    applyMiddleware( thunk, logger ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // if (module.hot) {
  //   module.hot.accept('./App', () => {
  //     const nextReducer = require('./App').default;
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
