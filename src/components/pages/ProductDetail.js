import React, { Component } from 'react';
import '../../styles/ProductDetail.css';
import { Row, Col } from 'react-grid-system';
import Page from '../Page';
import CardContainer from '../CardContainer';
import PipeToLocalePrice from '../../pipes/PipeToLocalePrice';
import axios from 'axios';

import CartHelper from '../../helpers/CartHelper';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class ProductDetail extends Component {
	constructor(props){
		super(props);

		this.state = {
			product: null,
			categories: null
		};

		axios.get(config.api + '/product/' + this.props.match.params.id)
		  .then(function (response) {
		  	this.setState({product: response.data});
		  }.bind(this));

	  	axios.get(config.api + '/product/' + this.props.match.params.id + '/category')
		  .then(function (response) {
		  	this.setState({categories: response.data});
		  }.bind(this));
	}

	addProductToCartHelper(){
		CartHelper.addProduct(this.state.product);
	}

	render() {
		return (
			<Page id="product-detail">
				{(this.state.product) ?
					<Row>
			          <Col md={9}>
			          	<CardContainer>
			          		<Row>
			          			<Col md={4} className="product-image">
				          			<img src={this.state.product.imgUrl} alt={this.state.product.name} />
				          		</Col>
				          		<Col md={8}>
				          			<h1>{this.state.product.name}</h1>
				          			{(this.state.categories) ?
				          				<div className="tags">
				          					{this.state.categories.map(function(category){
					          					return (<a href={"/category/" + category.id}><span className="tag">{category.name}</span></a>);
					          				})}
				          				</div>
				          			: null }
				          			<span className="stock">Stock: {this.state.product.stock}</span>
				          			<p>ISBN: {this.state.product.id}</p>
				          			<p>{this.state.product.description}</p>
				          		</Col>
			          		</Row>
			          	</CardContainer>
			          </Col>
			          <Col md={3}>
			          	<CardContainer>
			          		<h1>{PipeToLocalePrice(this.state.product.price)}</h1>
			          		<p><b>{this.state.product.deliveryDays}</b> days for delivery.</p>
			          		<button className="btn primary-btn btn-full-width" onClick={this.addProductToCartHelper.bind(this)}>Add to Cart</button>
			          		<button className="btn secondary-btn btn-full-width">Add to Wishlist</button>
			          	</CardContainer>
			          </Col>
			        </Row>
		        : null
				}
			</Page>
		);
	}
}

export default ProductDetail;
