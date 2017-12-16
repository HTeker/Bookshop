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
import ManageProducts from './components/pages/admin/ManageProducts';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
	    <div>
	        <Route exact path='/' component={Home} />
	        <Route path='/product/:id' component={ProductDetail} />
	        <Route path='/product/create' component={CreateProduct} />
	        <Route path='/product/:id/edit' component={EditProduct} />
	        <Route path='/products/manage' component={ManageProducts} />
	        <Route path='/category/:id' component={CategoryDetail} />
	        <Route path='/user/create' component={CreateUser} />
	        <Route path='/user/:id/edit' component={EditUser} />
	        <Route path='/login' component={Login} />
	        <Route path='/search/:query' component={Search} />
	        <Route path='/cart' component={Cart} />
	        <Route path='/wishlist' component={Wishlist} />
	    </div>
	</Router>
, document.getElementById('root'));

registerServiceWorker();
