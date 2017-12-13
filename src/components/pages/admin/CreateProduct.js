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
			categories: null,
			isbn: '',
			name: '',
			description: '',
			price: 0.00,
			img: '',
			stock: 0,
			delivery: 0
		};

		axios.get(config.api + '/category')
		  .then(function (response) {
		  	this.setState({categories: response.data});
		  }.bind(this));
	}

	handleChange(name, e) {
		var change = {};
		change[name] = e.target.value;
		this.setState(change);
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
							<label for="isbn">ISBN:</label>
							<input type="text" name="isbn" placeholder="ISBN" className="full-width" value={this.state.isbn} onChange={this.handleChange.bind(this, 'isbn')} />
							<label for="name">Name:</label>
							<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
							<label for="description">Description:</label>
							<input type="text" name="description" placeholder="Description" className="full-width" value={this.state.description} onChange={this.handleChange.bind(this, 'description')} />
							<label for="price">Price:</label>
							<input type="number" name="price" placeholder="Price" step="0.01" className="full-width" value={this.state.price} onChange={this.handleChange.bind(this, 'price')} />
							<label for="img">Image URL:</label>
							<input type="text" name="img" placeholder="Image URL" className="full-width" value={this.state.img} onChange={this.handleChange.bind(this, 'img')} />
							<label for="stock">Stock:</label>
							<input type="number" name="stock" placeholder="Stock" className="full-width" value={this.state.stock} onChange={this.handleChange.bind(this, 'stock')} />
							<label for="delivery">Delivery:</label>
							<input type="number" name="delivery" placeholder="Delivery days" className="full-width" value={this.state.delivery} onChange={this.handleChange.bind(this, 'delivery')} />

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
