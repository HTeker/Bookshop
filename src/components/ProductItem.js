import React, { Component } from 'react';
import '../styles/ProductItem.css';
import PricePipe from '../pipes/PricePipe';

class ProductItem extends Component {
	render() {
		return (
			<div className="product-item">
				<div class="item-img">
					<a href="#">
						<img src={this.props.product.imgUrl} />
					</a>
				</div>
				<h4 className="item-name"><a href="#">{this.props.product.name}</a></h4>
				<span className="item-price">€ {PricePipe(this.props.product.price)}</span>
			</div>
		);
	}
}

export default ProductItem;