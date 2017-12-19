import React, { Component } from 'react';
import '../styles/ProductItemInCart.css';
import PipeToLocalePrice from '../pipes/PipeToLocalePrice';

import CartHelper from '../helpers/CartHelper';

class ProductItemInCart extends Component {
	constructor(props){
		super(props);

		this.state = {
			product: props.product,
			quantity: props.quantity
		}
	}

	removeProductFromCartHelper(){
		CartHelper.removeProduct(this.state.product);
		this.props.removeHandler(this.state.product);
	}

	render() {
		return (
			<div className="product-item-in-cart">

				<div className="product-item">
					<div className="item-img">
						<a href={"/product/" + this.state.product.id}>
							<img src={this.state.product.imgUrl} alt={this.state.product.name} />
						</a>
					</div>

					<h4 className="item-name"><a href={"/product/" + this.state.product.id}>{this.state.product.name}</a></h4>
				</div>
				
				<div className="right-section">
					<br />
					<div className="quantity">
						<label for="quantity">Quantity</label>
						<input type="number" name="quantity" min="0" value={this.state.quantity} />
					</div>
					<br />
					<div>
						<span className="item-price">{PipeToLocalePrice(this.state.product.price)}</span>
					</div>
					<br />
					<br />
					<div>
						<button className="btn secondary-btn" onClick={this.removeProductFromCartHelper.bind(this)}>Remove</button>
					</div>
					<br />
				</div>
			</div>
		);
	}
}

export default ProductItemInCart;