import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/pages/Home';

import ProductDetail from './components/pages/ProductDetail';
import CreateProduct from './components/pages/admin/CreateProduct';
import EditProduct from './components/pages/admin/EditProduct';
import ManageProducts from './components/pages/admin/ManageProducts';

import CategoryDetail from './components/pages/CategoryDetail';
import CreateCategory from './components/pages/admin/CreateCategory';
import EditCategory from './components/pages/admin/EditCategory';
import ManageCategories from './components/pages/admin/ManageCategories';

import CreateUser from './components/pages/admin/CreateUser';
import EditUser from './components/pages/admin/EditUser';
import ManageUsers from './components/pages/admin/ManageUsers';

import Login from './components/pages/Login';
import Search from './components/pages/Search';
import Cart from './components/pages/Cart';
import Wishlist from './components/pages/customer/Wishlist';
import Checkout from './components/pages/Checkout';

ReactDOM.render(
	<Router history={createBrowserHistory()}>
	    <Switch>
	        <Route exact path='/' component={Home} />
	        <Route path='/product/manage' component={ManageProducts} />
	        <Route path='/product/create' component={CreateProduct} />
	        <Route path='/product/:id/edit' component={EditProduct} />
	        <Route path='/product/:id' component={ProductDetail} />
	        <Route path='/category/manage' component={ManageCategories} />
	        <Route path='/category/create' component={CreateCategory} />
	        <Route path='/category/:id/edit' component={EditCategory} />
	        <Route path='/category/:id' component={CategoryDetail} />
	        <Route path='/user/manage' component={ManageUsers} />
	        <Route path='/user/create' component={CreateUser} />
	        <Route path='/user/:email/edit' component={EditUser} />
	        <Route path='/login' component={Login} />
	        <Route path='/search/:query' component={Search} />
	        <Route path='/cart' component={Cart} />
	        <Route path='/wishlist' component={Wishlist} />
	        <Route path='/checkout' component={Checkout} />
	        <Route path='*' component={Home} />
	    </Switch>
	</Router>
, document.getElementById('root'));

registerServiceWorker();
