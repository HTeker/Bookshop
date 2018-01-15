import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import '../../styles/Checkout.css';

import CartHelper from '../../helpers/CartHelper';
import PipeToLocalePrice from '../../pipes/PipeToLocalePrice';
import LoaderAndAlert from '../LoaderAndAlert';

import Page from '../Page';
import CardContainer from '../CardContainer';
import ProductItemInWishlist from '../ProductItemInWishlist';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class Checkout extends Component {
	constructor(props){
		super(props);

		this.state = {
			products: CartHelper.getAllProducts(),
			totalPrice: CartHelper.getTotalPrice(),

			loading: false,
			success: '',
			errors: '',

			form: {
				name: '',
				email: '',
				password: '',
				passwordConfirm: '',
				street: '',
				number: '',
				city: '',
				zipcode: ''
			},

			currentUser: JSON.parse(sessionStorage.getItem('user'))
		};
	}

	submitRegistered(){
		const self = this;

		axios.post(config.api + '/user/' + this.state.currentUser.email + '/order', this.state.products, {
				headers: { Authorization: "Bearer " + sessionStorage.getItem('token') }
			})
		  .then(function (response) {
		  	self.setState({loading: false});
		  	self.setState({success: 'Order has been placed successfully.'});
		  	self.setState({errors: null});

		  	CartHelper.empty();

		  	setTimeout(function () {
				window.location.href = "//" + window.location.host + "/orderplaced";
		    }, 3000);
		  })
		  .catch(function(error){
		  	self.setState({loading: false});
		  	self.setState({success: ''});
		  	error.response.status == 403 || error.response.status == 400
				? self.setState({errors: [error.response.statusText]})
				: self.setState({errors: error.response.data.errors});
		  });
	}

	submit() {
		if(this.state.form.password != this.state.form.passwordConfirm){
			this.setState({success: ''});
			this.setState({errors: ['The passwords don\'t match']});
		}else{
			this.setState({loading: true});
			this.setState({success: ''});
			this.setState({errors: null});
			const self = this;

			axios.post(config.api + '/signup', this.state.form)
			  .then(function (response) {
			  	self.setState({loading: false});
				self.setState({success: ''});
				self.setState({errors: null});

		  		sessionStorage.setItem('token', response.data.token);
		  		sessionStorage.setItem('user', JSON.stringify(response.data.user));

		  		self.setState({currentUser: response.data.user}, () => {
		  			self.submitRegistered();
		  		});
			  })
			  .catch(function(error){
			  	self.setState({loading: false});
			  	self.setState({success: ''});
			  	self.setState({errors: error.response.data.errors});
			  });
		}
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<Page id="checkout">
				<Row>
					<Col md={8}>
						<CardContainer>
							<h3>Checkout</h3>
							{(sessionStorage.getItem('token')) ? 
								<div>
									<label htmlFor="name">Name:</label>
									<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.currentUser.name} disabled />
									<label htmlFor="email">E-mail:</label>
									<input type="email" name="email" placeholder="E-mail" className="full-width" value={this.state.currentUser.email} disabled />
									<label htmlFor="street">Street:</label>
									<input type="text" name="street" placeholder="Street" className="full-width" value={this.state.currentUser.street} disabled />
									<label htmlFor="number">Number:</label>
									<input type="text" name="number" placeholder="Number" className="full-width" value={this.state.currentUser.number} disabled />
									<label htmlFor="city">City:</label>
									<input type="text" name="city" placeholder="City" className="full-width" value={this.state.currentUser.city} disabled />
									<label htmlFor="zipcode">Zipcode:</label>
									<input type="text" name="zipcode" placeholder="Zipcode" className="full-width" value={this.state.currentUser.zipcode} disabled />

									<LoaderAndAlert loading={this.state.loading} success={this.state.success} errors={this.state.errors} />

									<button className="btn primary-btn btn-full-width" onClick={this.submitRegistered.bind(this)}>Order</button>
								</div>
							: 
								<div>
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

									<LoaderAndAlert loading={this.state.loading} success={this.state.success} errors={this.state.errors} />

									<button className="btn primary-btn btn-full-width" onClick={this.submit.bind(this)}>Order</button>
								</div>
							}
						</CardContainer>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Your Cart</h3>
							{this.state.products.map(function(product){
								return (
									<div className="product">
										<span className="name">{product.product.name}</span>
										<span>({product.quantity}x)</span>
										<span className="right">{PipeToLocalePrice(product.product.price * product.quantity)}</span>
									</div>
								);
							})}
							<hr />
							<div>
								<span>Total</span>
								<span className="right">{PipeToLocalePrice(this.state.totalPrice)}</span>
							</div>
						</CardContainer>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default Checkout;
