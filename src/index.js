import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import './style/index.css';

import store from './store';

ReactDOM.render(
  <Provider store={store} style={{width: '100%', height: 400}}>
  <App/>
</Provider>, document.getElementById('root'));
