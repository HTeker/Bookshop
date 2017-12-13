import React, { Component } from 'react';
import '../../../styles/EditUser.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class EditUser extends Component {
	constructor(props){
		super(props);

		this.state = {
			user: '',
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
			street: '',
			number: '',
			city: '',
			zipcode: ''
		};

		axios.get(config.api + '/user/' + this.props.match.params.id)
		  .then(function (response) {
		  	this.setState({user: response.data});
			this.setState({name: response.data.name});
			this.setState({email: response.data.email});
			this.setState({password: response.data.password});
			this.setState({street: response.data.street});
			this.setState({number: response.data.number});
			this.setState({city: response.data.city});
			this.setState({zipcode: response.data.zipcode});
		  }.bind(this));
	}

	handleChange(name, e) {
		var change = {};
		change[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<Page id="login">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						{(this.state.user || 1 == 1) ?
							<CardContainer>
								<h3>Create User</h3>
								<label htmlFor="name">Name:</label>
								<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
								<label htmlFor="email">E-mail:</label>
								<input type="email" name="email" placeholder="E-mail" className="full-width" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
								<label htmlFor="password">Password:</label>
								<input type="password" name="password" placeholder="Password" step="0.01" className="full-width" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
								<label htmlFor="passwordConfirm">Password Confirm:</label>
								<input type="password" name="passwordConfirm" placeholder="Password Confirm" className="full-width" value={this.state.passwordConfirm} onChange={this.handleChange.bind(this, 'passwordConfirm')} />
								<label htmlFor="street">Street:</label>
								<input type="text" name="street" placeholder="Street" className="full-width" value={this.state.street} onChange={this.handleChange.bind(this, 'street')} />
								<label htmlFor="number">Number:</label>
								<input type="text" name="number" placeholder="Number" className="full-width" value={this.state.number} onChange={this.handleChange.bind(this, 'number')} />
								<label htmlFor="city">City:</label>
								<input type="text" name="city" placeholder="City" className="full-width" value={this.state.city} onChange={this.handleChange.bind(this, 'city')} />
								<label htmlFor="zipcode">Zipcode:</label>
								<input type="text" name="zipcode" placeholder="Zipcode" className="full-width" value={this.state.zipcode} onChange={this.handleChange.bind(this, 'zipcode')} />

								<button className="btn primary-btn btn-full-width">Edit</button>
							</CardContainer>
						: null }
					</Col>
					<Col md={4}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default EditUser;
