import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import configuredStore from './redux/store'
import {Provider} from 'react-redux'



ReactDOM.render(

  <Provider store={configuredStore}>
     <BrowserRouter>
        <App />
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

