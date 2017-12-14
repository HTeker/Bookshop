import React, { Component } from 'react';
import '../styles/ProductItemInList.css';

class ProductItemInList extends Component {
	render() {
		return (
			<div className="product-item-in-list">
				<a href={"/edit-product/" + this.props.product.id}><h4>{this.props.product.name}</h4></a>
			</div>
		);
	}
}

export default ProductItemInList;
