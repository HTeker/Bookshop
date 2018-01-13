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
			},
			
			signupMsg: {
				loading: false,
				success: '',
				errors: null,
			},

			signupForm: {
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

	handleSignupChange(name, e) {
		var change = {signupForm: this.state.signupForm};
		change.signupForm[name] = e.target.value;
		this.setState(change);
	}

	signup() {
		if(this.state.signupForm.password != this.state.signupForm.passwordConfirm){
			this.setState({signupMsg: {success: '', errors: ['The passwords don\'t match']}});
		}else{
			this.setState({signupMsg: {loading: true, success: '', errors: null}});
			const self = this;

			axios.post(config.api + '/signup', this.state.signupForm)
			  .then(function (response) {
			  	self.setState({signupMsg: {loading: false, success: 'Signup successful', errors: null}});
		  		sessionStorage.setItem('token', response.data.token);
		  		sessionStorage.setItem('user', JSON.stringify(response.data.user));
		  		window.location.href = "//" + window.location.host;
			  })
			  .catch(function(error){
			  	self.setState({signupMsg: {loading: false, success: '', errors: error.response.data.errors}});
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
							<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.signupForm.name} onChange={this.handleSignupChange.bind(this, 'name')} />
							<input type="text" name="email" placeholder="E-mailaddress" className="full-width" value={this.state.signupForm.email} onChange={this.handleSignupChange.bind(this, 'email')} />
							<input type="password" name="password" placeholder="Password" className="full-width" value={this.state.signupForm.password} onChange={this.handleSignupChange.bind(this, 'password')} />
							<input type="password" name="password-confirm" placeholder="Password Confirmation" className="full-width" value={this.state.signupForm.passwordConfirm} onChange={this.handleSignupChange.bind(this, 'passwordConfirm')} />
							<input type="text" name="street" placeholder="Street" className="full-width" value={this.state.signupForm.street} onChange={this.handleSignupChange.bind(this, 'street')} />
							<input type="text" name="number" placeholder="Number" className="full-width" value={this.state.signupForm.number} onChange={this.handleSignupChange.bind(this, 'number')} />
							<input type="text" name="city" placeholder="City" className="full-width" value={this.state.signupForm.city} onChange={this.handleSignupChange.bind(this, 'city')} />
							<input type="text" name="zipcode" placeholder="Zipcode" className="full-width" value={this.state.signupForm.zipcode} onChange={this.handleSignupChange.bind(this, 'zipcode')} />
							
							<LoaderAndAlert loading={this.state.signupMsg.loading} success={this.state.signupMsg.success} errors={this.state.signupMsg.errors} />

							<button className="btn primary-btn btn-full-width" onClick={this.signup.bind(this)}>Signup</button>
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
