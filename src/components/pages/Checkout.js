import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

import '../../styles/Checkout.css';

import CartHelper from '../../helpers/CartHelper';
import PipeToLocalePrice from '../../pipes/PipeToLocalePrice';

import Page from '../Page';
import CardContainer from '../CardContainer';
import ProductItemInWishlist from '../ProductItemInWishlist';

class Checkout extends Component {
	constructor(props){
		super(props);

		this.state = {
			products: CartHelper.getAllProducts(),
			totalPrice: CartHelper.getTotalPrice()
		};
	}

	render() {
		return (
			<Page id="checkout">
				<Row>
					<Col md={8}>
						<CardContainer>
							<h3>Checkout</h3>

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
