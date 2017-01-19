
// Required packages
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

// Required files
import rootReducer from './reducers';

// Create the store
export default createStore(
    rootReducer,
    applyMiddleware(thunk, createLogger())
);
