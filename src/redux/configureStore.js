import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducer from './covid';
import countryReducer from './countries';

const rootReducer = combineReducers({
  covidReducer,
  countryReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
