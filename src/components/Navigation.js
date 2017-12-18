import React, { Component } from 'react';
import '../styles/Navigation.css';

import $ from 'jquery';

const links = [
	{name: 'Home', url: '/'},
	{name: 'Login', url: '/login'},
	{name: 'Products', url: '/product'},
	{name: 'Product', id: 'product-dropdown', links: [
		{name: 'Manage', url: '/product/manage'},
		{name: 'Create', url: '/product/create'},
	]},
	{name: 'Category', id: 'category-dropdown', links: [
		{name: 'Manage', url: '/category/manage'},
		{name: 'Create', url: '/category/create'},
	]},
	{name: 'User', id: 'user-dropdown', links: [
		{name: 'Manage', url: '/user/manage'},
		{name: 'Create', url: '/user/create'},
	]}
];

class Navigation extends Component {
	componentDidMount(){
		$('.menu-dropdown').hover(function(e){
			$(this).children('ul').show();
		}, function(e){
			$('.menu-dropdown ul').hide();
		});
	}

	render() {
		return (
			<div id="navigation-container">
				<div id="navigation">
					<ul>
						{links.map(function(link){
							if(link.links){
								return (
									<li id={link.id} key={link.url} className="menu-dropdown">
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
						})}
					</ul>

					<div className="right-section">
						<div className="cart-container">
							<span className="total">€ 0,00</span>
							<a href="/cart" className="cart-btn">
							    <span className="item-count">
							        0 Items
						        </span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;