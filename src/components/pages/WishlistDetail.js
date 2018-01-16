import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

import Page from '../Page';
import CardContainer from '../CardContainer';

import WishlistHelper from '../../helpers/WishlistHelper';

class WishlistDetail extends Component {

	constructor(props){
		super(props);

		this.state = {
			wishlist: null,
			products: []
		};
	}

	componentDidMount(){
		this.setState({wishlist: WishlistHelper.getWishlistById(this.props.match.params.id)});
		this.refreshData();
	}

	deleteProductFromWishlist(productId) {
		WishlistHelper.removeProductFromWishlistById(this.state.wishlist.id, productId);
		this.refreshData();
	}

	refreshData(){
		this.setState({products: WishlistHelper.getProductsOfWishlistById(this.props.match.params.id)});
	}

	render(){
		return (
			<Page id="wishlist-detail">
				<Row>
					<Col></Col>
					<Col>
						<CardContainer>
							{(this.state.wishlist) ?
								<div>
									<h3>{this.state.wishlist.name}</h3>
									<a href={"/wishlist/" + this.props.match.params.id + "/edit"}>Edit</a>
								</div>
							: null }
						</CardContainer>

						{(this.state.products.length > 0) ?
							(this.state.products.map(function(product){
								return (
									<CardContainer key={product.id}>
										{product.name}
										<span className="delete-btn" onClick={() => this.deleteProductFromWishlist(product.id)}><b>X</b></span>
									</CardContainer>
								);
							}.bind(this)))
						: <CardContainer>No products yet</CardContainer> }
					</Col>
					<Col></Col>
				</Row>
			</Page>
		);
	}
}

export default WishlistDetail;