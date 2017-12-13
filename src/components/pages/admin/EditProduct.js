import React, { Component } from 'react';
import '../../../styles/EditProduct.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class EditProduct extends Component {
	constructor(props){
		super(props);

		this.state = {
			product: null,
			categories: null,
			id: '',
			name: '',
			description: '',
			price: 0.00,
			imgUrl: '',
			stock: 0,
			deliveryDays: 0
		};

		axios.get(config.api + '/product/' + this.props.match.params.id)
		  .then(function (response) {
		  	console.log(response.data);
		  	this.setState({product: response.data});
		  	this.setState({id: response.data.id});
		  	this.setState({name: response.data.name});
			this.setState({description: response.data.description});
			this.setState({price: response.data.price});
			this.setState({imgUrl: response.data.imgUrl});
			this.setState({stock: response.data.stock});
			this.setState({deliveryDays: response.data.deliveryDays});
		  }.bind(this));

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
						{(this.state) ?
							<CardContainer>
								<h3>Edit Product</h3>
								<label htmlFor="id">ISBN:</label>
								<input type="text" name="id" className="full-width" value={this.state.id} readonly />
								<label htmlFor="name">Name:</label>
								<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
								<label htmlFor="description">Description:</label>
								<input type="text" name="description" placeholder="Description" className="full-width" value={this.state.description} onChange={this.handleChange.bind(this, 'description')} />
								<label htmlFor="price">Price:</label>
								<input type="number" name="price" placeholder="Price" step="0.01" className="full-width" value={this.state.price} onChange={this.handleChange.bind(this, 'price')} />
								<label htmlFor="imgUrl">Image URL:</label>
								<input type="text" name="imgUrl" placeholder="Image URL" className="full-width" value={this.state.imgUrl} onChange={this.handleChange.bind(this, 'imgUrl')} />
								<label htmlFor="stock">Stock:</label>
								<input type="number" name="stock" placeholder="Stock" className="full-width" value={this.state.stock} onChange={this.handleChange.bind(this, 'stock')} />
								<label htmlFor="deliveryDays">Delivery:</label>
								<input type="number" name="deliveryDays" placeholder="Delivery days" className="full-width" value={this.state.deliveryDays} onChange={this.handleChange.bind(this, 'deliveryDays')} />

								<button className="btn primary-btn btn-full-width">Edit</button>
							</CardContainer>
						: null }
					</Col>
					<Col md={4}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default EditProduct;
