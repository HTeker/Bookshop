import React, { Component } from 'react';
import '../../../styles/CreateProduct.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';
import LoaderAndAlert from '../../LoaderAndAlert';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class CreateProduct extends Component {
	constructor(props){
		super(props);

		this.state = {
			categories: null,
			loading: false,
			success: '',
			error: '',

			id: '',
			name: '',
			description: '',
			price: 0.00,
			imgUrl: '',
			stock: 0,
			deliveryDays: 0
		};

		axios.get(config.api + '/category')
		  .then(function (response) {
		  	this.setState({categories: response.data});
		  }.bind(this));
	}

	submit() {
		const form = {
			id: this.state.id,
			name: this.state.name,
			description: this.state.description,
			price: this.state.price,
			imgUrl: this.state.imgUrl,
			stock: this.state.stock,
			deliveryDays: this.state.deliveryDays
		};

		this.setState({loading: true});
		this.setState({success: ''});
		this.setState({error: ''});
		const self = this;

		axios.post(config.api + '/product', form)
		  .then(function (response) {
		  	self.setState({loading: false});
		  	self.setState({success: response.statusText});
	  		self.setState({error: ''});
		  })
		  .catch(function(error){
		  	self.setState({loading: false});
		  	self.setState({success: ''});
		  	self.setState({error: error.response.statusText});
		  });
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
							<label htmlFor="id">ISBN:</label>
							<input type="text" name="id" placeholder="ISBN" className="full-width" value={this.state.id} onChange={this.handleChange.bind(this, 'id')} />
							<label htmlFor="name">Name:</label>
							<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
							<label htmlFor="description">Description:</label>
							<input type="text" name="description" placeholder="Description" className="full-width" value={this.state.description} onChange={this.handleChange.bind(this, 'description')} />
							<label htmlFor="price">Price:</label>
							<input type="number" name="price" placeholder="Price" min="0.01" step="0.01" className="full-width" value={this.state.price} onChange={this.handleChange.bind(this, 'price')} />
							<label htmlFor="imgUrl">Image URL:</label>
							<input type="text" name="imgUrl" placeholder="Image URL" className="full-width" value={this.state.imgUrl} onChange={this.handleChange.bind(this, 'imgUrl')} />
							<label htmlFor="stock">Stock:</label>
							<input type="number" name="stock" placeholder="Stock" className="full-width" value={this.state.stock} onChange={this.handleChange.bind(this, 'stock')} />
							<label htmlFor="deliveryDays">Delivery:</label>
							<input type="number" name="deliveryDays" placeholder="Delivery days" className="full-width" value={this.state.deliveryDays} onChange={this.handleChange.bind(this, 'deliveryDays')} />

							<LoaderAndAlert loading={this.state.loading} success={this.state.success} error={this.state.error} />

							<button className="btn primary-btn btn-full-width" onClick={this.submit.bind(this)}>Create</button>
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
