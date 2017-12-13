import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/Header.css';

class Header extends Component {

	constructor(props){
		super(props);

		this.state = {
			query: ''
		};

		this.handleChange = (name, e) => {
			var change = {};
			change[name] = e.target.value;
			this.setState(change);
		}
	}

	search(){
		if(this.state.query){
			window.location.href = "//" + window.location.host + "/search/" + this.state.query;
		}
	}

	render() {
		return (
			<div id="header-container">
				<div id="header">
					<a href="/" className="brand-link">
						<img src={logo} alt="Logo" />
					</a>

					<div className="right-section">
						<input id="search-input" type="text" placeholder="Search for books by isbn, name or description..." value={this.state.query} onChange={this.handleChange.bind(this, 'query')} />
						<button className="btn primary-btn" onClick={this.search.bind(this)}>Search</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;