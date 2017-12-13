import React, { Component } from 'react';
import '../../../styles/CreateProduct.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class CreateProduct extends Component {
	constructor(props){
		super(props);

		this.state = {
			categories: null
		};

		axios.get(config.api + '/category')
		  .then(function (response) {
		  	this.setState({categories: response.data});
		  }.bind(this));
	}

	render() {
		return (
			<Page id="login">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Create Product</h3>
							<input type="text" name="isbn" placeholder="ISBN" className="full-width" />
							<input type="text" name="name" placeholder="Name" className="full-width" />
							<input type="text" name="description" placeholder="Description" className="full-width" />
							<input type="number" name="price" placeholder="Price" step="0.01" className="full-width" />
							<input type="text" name="img" placeholder="Image URL" className="full-width" />
							<input type="number" name="stock" placeholder="Stock" className="full-width" />
							<input type="number" name="delivery" placeholder="Delivery days" className="full-width" />

							<button className="btn primary-btn btn-full-width">Create</button>
						</CardContainer>
					</Col>
					<Col md={4}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default CreateProduct;
