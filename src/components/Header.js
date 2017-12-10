import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/Header.css';

class Header extends Component {
	render() {
		return (
			<div id="header-container">
				<div id="header">
					<a href="/" className="brand-link">
						<img src={logo} />
					</a>

					<div className="right-section">
						<input id="search-input" type="text" placeholder="Search for books by isbn, name or description..." />
						<button id="search-btn">Search</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;