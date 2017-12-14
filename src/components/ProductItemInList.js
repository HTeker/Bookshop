import React, { Component } from 'react';
import '../styles/ProductItemInList.css';

class ProductItemInList extends Component {
	removeItem(){
		console.log("Removing: " + this.props.product.name);
		this.props.removeHandler(this.props.product);
	}

	render() {
		return (
			<div className="product-item-in-list">
				<a href={"/edit-product/" + this.props.product.id}><h4>{this.props.product.name}</h4></a>
				<a href="#" className="remove" onClick={this.removeItem.bind(this)}>Remove</a>
			</div>
		);
	}
}

export default ProductItemInList;
