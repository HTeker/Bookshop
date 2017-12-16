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
				<a href={"/product/" + this.props.product.id + "/edit"}><h4>{this.props.product.name}</h4></a>
				<button className="btn secondary-btn" onClick={this.removeItem.bind(this)}>Remove</button>
			</div>
		);
	}
}

export default ProductItemInList;
