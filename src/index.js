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
import Cart from './components/pages/Cart';
import Wishlist from './components/pages/customer/Wishlist';
import CreateProduct from './components/pages/admin/CreateProduct';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
	    <div>
	        <Route exact path='/' component={Home} />
	        <Route path='/login' component={Login} />
	        <Route path='/product/:id' component={ProductDetail} />
	        <Route path='/category/:id' component={CategoryDetail} />
	        <Route path='/search/:query' component={Search} />
	        <Route path='/cart' component={Cart} />
	        //Customer
	        <Route path='/wishlist' component={Wishlist} />
	        //Admin
	        <Route path='/create-product' component={CreateProduct} />
	    </div>
	</Router>
, document.getElementById('root'));

registerServiceWorker();
