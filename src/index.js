import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/pages/Home';

import WishlistDetail from './components/pages/WishlistDetail';
import CreateWishlist from './components/pages/CreateWishlist';
import EditWishlist from './components/pages/EditWishlist';
import ManageWishlists from './components/pages/ManageWishlists';

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
import Logout from './components/pages/Logout';

import Statistics from './components/pages/admin/Statistics';

import Search from './components/pages/Search';
import Cart from './components/pages/Cart';
import Wishlist from './components/pages/customer/Wishlist';
import Orders from './components/pages/customer/Orders';
import Checkout from './components/pages/Checkout';
import OrderPlaced from './components/pages/OrderPlaced';

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
	        <Route path='/logout' component={Logout} />
	        <Route path='/search/:query' component={Search} />
	        <Route path='/cart' component={Cart} />
	        <Route path='/orders' component={Orders} />
	        <Route path='/wishlist/manage' component={ManageWishlists} />
	        <Route path='/wishlist/create' component={CreateWishlist} />
	        <Route path='/wishlist/:id/edit' component={EditWishlist} />
	        <Route path='/wishlist/:id' component={WishlistDetail} />
	        <Route path='/checkout' component={Checkout} />
	        <Route path='/orderplaced' component={OrderPlaced} />
	        <Route path='/statistics' component={Statistics} />
	        <Route path='*' component={Home} />
	    </Switch>
	</Router>
, document.getElementById('root'));

registerServiceWorker();
