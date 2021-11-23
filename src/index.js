import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import getData, { getCountryData } from './redux/API';
import store from './redux/configureStore';

store.dispatch(getData());
store.dispatch(getCountryData());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
