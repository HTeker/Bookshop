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
import EditProduct from './components/pages/admin/EditProduct';
import CreateUser from './components/pages/admin/CreateUser';
import EditUser from './components/pages/admin/EditUser';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
	    <div>
	        <Route exact path='/' component={Home} />
	        <Route path='/login' component={Login} />
	        <Route path='/product/:id' component={ProductDetail} />
	        <Route path='/category/:id' component={CategoryDetail} />
	        <Route path='/search/:query' component={Search} />
	        <Route path='/cart' component={Cart} />
	        <Route path='/wishlist' component={Wishlist} />
	        <Route path='/create-product' component={CreateProduct} />
	        <Route path='/edit-product/:id' component={EditProduct} />
	        <Route path='/create-user' component={CreateUser} />
	        <Route path='/edit-user/:id' component={EditUser} />
	    </div>
	</Router>
, document.getElementById('root'));

registerServiceWorker();
