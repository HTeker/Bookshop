import React, { Component } from 'react';
import '../../styles/Login.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../Page';
import CardContainer from '../CardContainer';
import LoaderAndAlert from '../LoaderAndAlert';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class Login extends Component {
	constructor(props){
		super(props);

		this.state = {

			loginMsg: {
				loading: false,
				success: '',
				errors: null,
			},

			loginForm: {
				email: '',
				password: ''
			}
			
		};
	}

	handleLoginChange(name, e) {
		var change = {loginForm: this.state.loginForm};
		change.loginForm[name] = e.target.value;
		this.setState(change);
	}

	login() {
		if(this.state.loginForm.email == '' && this.state.loginForm.password == ''){
			this.setState({loginMsg: {success: '', errors: ['Fill in the form']}});
		}else{
			this.setState({loginMsg: {loading: true, success: '', errors: null}});
			const self = this;

			axios.post(config.api + '/login', this.state.loginForm)
			  .then(function (response) {
			  	self.setState({loginMsg: {loading: false, success: 'Login successful', errors: null}});
		  		sessionStorage.setItem('token', response.data.token);
		  		sessionStorage.setItem('user', JSON.stringify(response.data.user));
		  		window.location.href = "//" + window.location.host;
			  })
			  .catch(function(error){
			  	self.setState({loginMsg: {loading: false, success: '', errors: error.response.data}});
			  });
		}
	}

	render() {
		return (
			<Page id="login">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Login</h3>
							<input type="text" name="email" placeholder="E-mailaddress" className="full-width" value={this.state.loginForm.email} onChange={this.handleLoginChange.bind(this, 'email')} />
							<input type="password" name="password" placeholder="Password" className="full-width" value={this.state.loginForm.password} onChange={this.handleLoginChange.bind(this, 'password')} />

							<LoaderAndAlert loading={this.state.loginMsg.loading} success={this.state.loginMsg.success} errors={this.state.loginMsg.errors} />

							<button className="btn primary-btn btn-full-width" onClick={this.login.bind(this)}>Login</button>
						</CardContainer>
					</Col>
					<Col md={4}>
					</Col>
				</Row>
				<div className="or">OR</div>
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Signup</h3>
							<input type="text" name="name" placeholder="Name" className="full-width" />
							<input type="text" name="email" placeholder="E-mailaddress" className="full-width" />
							<input type="password" name="password" placeholder="Password" className="full-width" />
							<input type="password" name="password-confirm" placeholder="Password Confirmation" className="full-width" />
							<input type="text" name="street" placeholder="Street" className="full-width" />
							<input type="text" name="number" placeholder="Number" className="full-width" />
							<input type="text" name="city" placeholder="City" className="full-width" />
							<input type="text" name="zipcode" placeholder="Zipcode" className="full-width" />
							<button className="btn primary-btn btn-full-width">Login</button>
						</CardContainer>
					</Col>
					<Col md={4}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default Login;
