import React, { Component } from 'react';
import '../styles/Navigation.css';

class Navigation extends Component {
	render() {
		return (
			<div id="navigation-container">
				<div id="navigation">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">Login</a></li>
					</ul>

					<div id="right-section">
						<div className="cart-container">
							<span className="total">€ 0,00</span>
							<a rel="nofollow" href="#" className="cart-btn">
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