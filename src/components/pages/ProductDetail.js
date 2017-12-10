import React, { Component } from 'react';
import '../../styles/ProductDetail.css';
import { Row, Col } from 'react-grid-system';
import Page from '../Page';
import CardContainer from '../CardContainer';
import PipeToLocalePrice from '../../pipes/PipeToLocalePrice';

//const paramId = this.props.match.params.id;
const product = { id: '0008164657', name: 'Bad Dad', description: "In yet another dazzling David Walliams classic, Bad Dad is a fast and furious, heart-warming.", price: 9.17, imgUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0081/9780008164652.jpg', stock: 10, deliveryDays: 5 };

class ProductDetail extends Component {
	render() {
		return (
			<Page id="product-detail">
				<Row>
		          <Col md={9}>
		          	<CardContainer>
		          		<Row>
		          			<Col md={4} className="product-image">
			          			<img src={product.imgUrl} />
			          		</Col>
			          		<Col md={8}>
			          			<h1>{product.name}</h1>
			          			<span className="stock">Stock: {product.stock}</span>
			          			<p>ISBN: {product.id}</p>
			          			<p>{product.description}</p>
			          		</Col>
		          		</Row>
		          	</CardContainer>
		          </Col>
		          <Col md={3}>
		          	<CardContainer>
		          		<h1>{PipeToLocalePrice(product.price)}</h1>
		          		<p><b>{product.deliveryDays}</b> days for delivery.</p>
		          	</CardContainer>
		          </Col>
		        </Row>
			</Page>
		);
	}
}

export default ProductDetail;
