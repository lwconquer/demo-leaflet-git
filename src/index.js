import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import MyApp from './Component/MyApp';
import reducer from './reducers';
 import { BrowserRouter as Router, Route, Link,HashRouter   } from 'react-router-dom';
// import { Router, Route, browserHistory } from 'react-router';


injectTapEventPlugin();

const middleWare = applyMiddleware(createLogger(), thunk);
const store = createStore(reducer, middleWare);

ReactDOM.render(<Provider store={store}><Router><MyApp/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
