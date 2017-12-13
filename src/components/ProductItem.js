import React, { Component } from 'react';
import '../styles/ProductItem.css';
import PipeToLocalePrice from '../pipes/PipeToLocalePrice';

class ProductItem extends Component {
	render() {
		return (
			<div className="product-item">
				<div className="item-img">
					<a href={"/product/" + this.props.product.id}>
						<img src={this.props.product.imgUrl} alt={this.props.product.name} />
					</a>
				</div>
				<h4 className="item-name"><a href={"/product/" + this.props.product.id}>{this.props.product.name}</a></h4>
				<span className="item-price">{PipeToLocalePrice(this.props.product.price)}</span>
			</div>
		);
	}
}

export default ProductItem;