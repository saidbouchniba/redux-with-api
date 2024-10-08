import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { userreducer } from './Reducer';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(userreducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
  export default store