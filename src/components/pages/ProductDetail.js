import React, { Component } from 'react';
import '../../styles/ProductDetail.css';
import Page from '../Page';

const product = { id: '0132350886', name: 'Clean Code : A Handbook of Agile Software Craftsmanship', price: 19.99, imgUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg'};

class ProductDetail extends Component {
	render() {
		return (
			<Page id="product-detail">
				{this.props.match.params.id}
				{product.name}
			</Page>
		);
	}
}

export default ProductDetail;
