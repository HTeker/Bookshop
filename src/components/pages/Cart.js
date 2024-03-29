import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import CartHelper from '../../helpers/CartHelper';
import PipeToLocalePrice from '../../pipes/PipeToLocalePrice';

import Page from '../Page';
import CardContainer from '../CardContainer';
import ProductItemInCart from '../ProductItemInCart';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class Cart extends Component {

	constructor(props){
		super(props);

		this.onItemChange = this.onItemChange.bind(this);

		this.state = {
			products: CartHelper.getAllProducts(),
			numberOfItemsInCart: CartHelper.getAllProducts().length,
			totalPrice: CartHelper.getTotalPrice()
		};
	}

	checkout(){
		window.location.href = "//" + window.location.host + "/checkout";
	}

	onItemChange(){
		this.setState({products: CartHelper.getAllProducts()});
		this.setState({numberOfItemsInCart: CartHelper.getAllProducts().length});
		this.setState({totalPrice: CartHelper.getTotalPrice()});
	}

	render() {
		return (
			<Page id="search" numberOfItemsInCart={this.state.numberOfItemsInCart} totalPrice={this.state.totalPrice}>
				<Row>
					<Col>
						<CardContainer>
							<h3>Your Cart</h3>
							<br />
							{this.state.products.map(function(product){
								return(<ProductItemInCart product={product.product} key={product.product.id} quantity={product.quantity} changeHandler={this.onItemChange}  />);
							}.bind(this))}
							<br />
							<div>Total: <b>{PipeToLocalePrice(this.state.totalPrice)}</b></div>
							<br />
							<button className="btn primary-btn" onClick={this.checkout.bind(this)}>Checkout</button>
						</CardContainer>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default Cart;