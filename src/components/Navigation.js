import React, { Component } from 'react';
import '../styles/Navigation.css';

const links = [
	{name: 'Home', url: '/'},
	{name: 'Categories', url: '#'},
	{name: 'About Us', url: '#'},
	{name: 'Contact', url: '#'},
	{name: 'Login', url: '/login'},
];

class Navigation extends Component {
	render() {
		return (
			<div id="navigation-container">
				<div id="navigation">
					<ul>
						{links.map(function(link){
							return (<li><a href={link.url}>{link.name}</a></li>);
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