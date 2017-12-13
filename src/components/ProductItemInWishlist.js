import React, { Component } from 'react';
import '../styles/ProductItemInWishlist.css';

class ProductItemInWishlist extends Component {
	remove(){

	}

	render() {
		return (
			<div className="product-item-in-wishlist">

				<div className="product-item">
					<div className="item-img">
						<a href={"/product/" + this.props.product.id}>
							<img src={this.props.product.imgUrl} alt={this.props.product.name} />
						</a>
					</div>

					<h4 className="item-name"><a href={"/product/" + this.props.product.id}>{this.props.product.name}</a></h4>
				</div>
				
				<div className="right-section">
					<div>
						<button className="btn secondary-btn" onClick={this.remove.bind(this)}>Remove</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductItemInWishlist;