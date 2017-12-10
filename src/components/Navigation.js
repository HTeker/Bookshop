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
						Right
					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;