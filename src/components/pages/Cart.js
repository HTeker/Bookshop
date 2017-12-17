import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../Page';
import CardContainer from '../CardContainer';
import ProductItemInCart from '../ProductItemInCart';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class Cart extends Component {

	constructor(props){
		super(props);

		this.state = {
			products: null
		};

		axios.get(config.api + '/product')
		  .then(function (response) {
		  	this.setState({products: response.data});
		  }.bind(this));
	}

	checkout(){
		if(this.state.query){
			window.location.href = "//" + window.location.host + "/search/" + this.state.query;
		}
	}

	render() {
		return (
			<Page id="search">
				<Row>
					<Col>
						<CardContainer>
							<h3>Your Cart</h3>
							<br />
							{(this.state.products) ?
								this.state.products.map(function(product){
									return(<ProductItemInCart product={product} quantity={5} />);
								})
							: null }
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