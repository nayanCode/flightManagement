import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
// import detailsReducer from './reducers/details.reducer'
import {BrowserRouter} from 'react-router-dom'
import rootReducer from './reducers/index.reducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// const myStore= createStore(rootReducer)

const middleware = [thunk];

const myStore = createStore(
  rootReducer, 
   composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={myStore} >
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


