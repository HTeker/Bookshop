import React, { Component } from 'react';
import '../styles/ProductItemInCart.css';
import PipeToLocalePrice from '../pipes/PipeToLocalePrice';

class ProductItemInCart extends Component {
	remove(){

	}

	render() {
		return (
			<div className="product-item-in-cart">

				<div className="product-item">
					<div className="item-img">
						<a href={"/product/" + this.props.product.id}>
							<img src={this.props.product.imgUrl} alt={this.props.product.name} />
						</a>
					</div>

					<h4 className="item-name"><a href={"/product/" + this.props.product.id}>{this.props.product.name}</a></h4>
				</div>
				
				<div className="right-section">
					<br />
					<div className="quantity">
						<label for="quantity">Quantity</label>
						<input type="number" name="quantity" min="0" />
					</div>
					<br />
					<div>
						<span className="item-price">{PipeToLocalePrice(this.props.product.price)}</span>
					</div>
					<br />
					<br />
					<div>
						<button className="btn secondary-btn" onClick={this.remove.bind(this)}>Remove</button>
					</div>
					<br />
				</div>
			</div>
		);
	}
}

export default ProductItemInCart;