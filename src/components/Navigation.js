import React, { Component } from 'react';
import '../styles/Navigation.css';

import CartHelper from '../helpers/CartHelper';
import PipeToLocalePrice from '../pipes/PipeToLocalePrice';

import $ from 'jquery';

const links = [
	{name: 'Home', url: '/'},
	{name: 'Products', url: '/product'},
	{name: 'Product', id: 'product-dropdown', adminOnly: true, links: [
		{name: 'Manage', url: '/product/manage'},
		{name: 'Create', url: '/product/create'},
	]},
	{name: 'Category', id: 'category-dropdown', adminOnly: true, links: [
		{name: 'Manage', url: '/category/manage'},
		{name: 'Create', url: '/category/create'},
	]},
	{name: 'User', id: 'user-dropdown', adminOnly: true, links: [
		{name: 'Manage', url: '/user/manage'},
		{name: 'Create', url: '/user/create'},
	]}
];

const adminLinks = [
];

class Navigation extends Component {
	constructor(props){
		super(props);

		this.state = {
			numberOfItemsInCart: CartHelper.getAllProducts().length,
			totalPrice: CartHelper.getTotalPrice()
		};
	}

	componentDidMount(){
		$('.menu-dropdown').hover(function(e){
			$(this).children('ul').show();
		}, function(e){
			$('.menu-dropdown ul').hide();
		});
	}

	render() {
		const user = JSON.parse(sessionStorage.getItem('user'));
		var isAdmin;
		if(user){
			isAdmin = user.isAdmin;
		}

		return (
			<div id="navigation-container">
				<div id="navigation">
					<ul>
						{links.map(function(link){
							if(!link.adminOnly || isAdmin){
								if(link.links){
									return (
										<li id={link.id} key={link.url || link.id} className="menu-dropdown">
											<a href="#">{link.name} <span className="arrow">&#129171;</span></a>
											<ul>
												{link.links.map(function(childLink){
													return (<li key={childLink.url}><a href={childLink.url}>{childLink.name}</a></li>);			
												})}
											</ul>
										</li>
									);
								}else{
									return (<li key={link.url}><a href={link.url}>{link.name}</a></li>);
								}
							}
						})}
					</ul>

					<div className="right-section">
						<div className="cart-container">
							<span className="total">{PipeToLocalePrice(this.props.totalPrice || this.state.totalPrice)}</span>
							<a href="/cart" className="cart-btn">
							    <span className="item-count">
							        {this.props.numberOfItemsInCart || this.state.numberOfItemsInCart} Items
						        </span>
							</a>
						</div>

						<ul>
							{(sessionStorage.getItem('token')) ?
								<li><a href="/logout">Logout</a></li>
							: <li><a href="/login">Login</a></li> }
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;