import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';
import LoaderAndAlert from '../../LoaderAndAlert';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class EditUser extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: false,
			success: null,
			errors: null,

			form: {
				user: '',
				name: '',
				email: '',
				password: '',
				passwordConfirm: '',
				street: '',
				number: '',
				city: '',
				zipcode: ''
			}
		};

		axios.get(config.api + '/user/' + this.props.match.params.email, {
				headers: { Authorization: "Bearer " + sessionStorage.getItem('token') }
			})
		  .then(function (response) {
		  	this.setState({form: response.data});
		  }.bind(this));
	}

	submit() {
		this.setState({loading: true});
		this.setState({success: null});
		this.setState({errors: null});
		const self = this;

		axios.put(config.api + '/user/' + this.props.match.params.email, this.state.form, {
			headers: { Authorization: "Bearer " + sessionStorage.getItem('token') }
		})
		  .then(function (response) {
		  	self.setState({loading: false});
		  	self.setState({success: response.statusText});
	  		self.setState({errors: ''});
		  })
		  .catch(function(error){
		  	self.setState({loading: false});
		  	self.setState({success: ''});
		  	error.response.status == 403
				? self.setState({errors: [error.response.statusText]})
				: self.setState({errors: error.response.data.errors});
		  });
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<Page id="edit-user">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						{(this.state.form.email) ?
							<CardContainer>
								<h3>Edit User</h3>
								<label htmlFor="name">Name:</label>
								<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.form.name} onChange={this.handleChange.bind(this, 'name')} />
								<label htmlFor="email">E-mail:</label>
								<input type="email" name="email" placeholder="E-mail" className="full-width" value={this.state.form.email} onChange={this.handleChange.bind(this, 'email')} />
								<label htmlFor="street">Street:</label>
								<input type="text" name="street" placeholder="Street" className="full-width" value={this.state.form.street} onChange={this.handleChange.bind(this, 'street')} />
								<label htmlFor="number">Number:</label>
								<input type="text" name="number" placeholder="Number" className="full-width" value={this.state.form.number} onChange={this.handleChange.bind(this, 'number')} />
								<label htmlFor="city">City:</label>
								<input type="text" name="city" placeholder="City" className="full-width" value={this.state.form.city} onChange={this.handleChange.bind(this, 'city')} />
								<label htmlFor="zipcode">Zipcode:</label>
								<input type="text" name="zipcode" placeholder="Zipcode" className="full-width" value={this.state.form.zipcode} onChange={this.handleChange.bind(this, 'zipcode')} />

								<LoaderAndAlert loading={this.state.loading} success={this.state.success} errors={this.state.errors} />

								<button className="btn primary-btn btn-full-width" onClick={this.submit.bind(this)}>Edit</button>
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
