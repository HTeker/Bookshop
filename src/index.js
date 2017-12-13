import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import ProductDetail from './components/pages/ProductDetail';
import CategoryDetail from './components/pages/CategoryDetail';
import Search from './components/pages/Search';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
	    <div>
	        <Route exact path='/' component={Home} />
	        <Route path='/login' component={Login} />
	        <Route path='/product/:id' component={ProductDetail} />
	        <Route path='/category/:id' component={CategoryDetail} />
	        <Route path='/search/:query' component={Search} />
	    </div>
	</Router>
, document.getElementById('root'));

registerServiceWorker();
