import React, { Component } from 'react';
import '../../styles/CategoryDetail.css';
import { Row, Col } from 'react-grid-system';
import Page from '../Page';
import CardContainer from '../CardContainer';
import axios from 'axios';
import ProductItem from '../ProductItem';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class CategoryDetail extends Component {

	constructor(props){
		super(props);

		this.state = {
			category: null,
			categories: null,
			products: null
		};

		axios.get(config.api + '/category/' + this.props.match.params.id)
		  .then(function (response) {
		  	this.setState({category: response.data});
		  }.bind(this));

		axios.get(config.api + '/category')
		  .then(function (response) {
		  	this.setState({categories: response.data});
		  }.bind(this));

		axios.get(config.api + '/category/' + this.props.match.params.id + '/product')
		  .then(function (response) {
		  	this.setState({products: response.data});
		  }.bind(this));
	}

	render() {
		return (
			<Page id="category-detail">
				<Row>
		          <Col md={3}>
		          	<CardContainer>
		          		{(this.state.categories) ?
				          	<ul>
					            {this.state.categories.map(function(category){
					            	return(<li><a href={"/category/" + category.id}>{category.name}</a></li>);
					            })}
				      		</ul>
			      		: null }
		          	</CardContainer>
		          </Col>
		          <Col md={9}>
		          	<CardContainer>
		          		{(this.state.category) ? <h3>{this.state.category.name}</h3> : null }
		          		{(this.state.products) ?
							this.state.products.map(function(product){
								return(<ProductItem product={product} />);
							})
						: null }
		          	</CardContainer>
		          </Col>
		        </Row>
			</Page>
		);
	}
}

export default CategoryDetail;