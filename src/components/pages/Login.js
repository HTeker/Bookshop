import React, { Component } from 'react';
import '../../styles/Login.css';
import { Row, Col } from 'react-grid-system';

import Page from '../Page';
import CardContainer from '../CardContainer';

class Login extends Component {
	render() {
		return (
			<Page id="login">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Login</h3>
							<input type="text" name="email" placeholder="E-mailaddress" className="full-width" />
							<input type="password" name="password" placeholder="Password" className="full-width" />
							<button className="btn primary-btn btn-full-width">Login</button>
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
