import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './reducers';

export default createStore(globalReducer, applyMiddleware(thunk));