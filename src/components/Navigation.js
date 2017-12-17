import React, { Component } from 'react';
import '../styles/Navigation.css';

const links = [
	{name: 'Home', url: '/'},
	{name: 'Login', url: '/login'},
	{name: 'Products', url: '/product'},
	{name: 'Product', url: '#', links: [
		{name: 'Manage', url: '/product/manage'},
		{name: 'Create', url: '/product/create'},
	]},
	{name: 'Category', url: '#', links: [
		{name: 'Manage', url: '/category/manage'},
		{name: 'Create', url: '/category/create'},
	]},
	{name: 'User', url: '#', links: [
		{name: 'Manage', url: '/user/manage'},
		{name: 'Create', url: '/user/create'},
	]}
];

class Navigation extends Component {
	render() {
		return (
			<div id="navigation-container">
				<div id="navigation">
					<ul>
						{links.map(function(link){
							if(link.links){
								return (
									<li key={link.url}>
										<a href={link.url}>{link.name}</a>
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