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
			errors: '',

			form: {
				id: '',
				name: '',
				description: '',
				price: 0.00,
				imgUrl: '',
				stock: 0,
				deliveryDays: 0
			}
		};

		axios.get(config.api + '/category')
		  .then(function (response) {
		  	this.setState({categories: response.data});
		  }.bind(this));
	}

	submit() {
		this.setState({loading: true});
		this.setState({success: ''});
		this.setState({errors: ''});
		const self = this;

		axios.post(config.api + '/product', this.state.form)
		  .then(function (response) {
		  	self.setState({loading: false});
		  	self.setState({success: response.statusText});
	  		self.setState({errors: ''});
		  })
		  .catch(function(error){
		  	self.setState({loading: false});
		  	self.setState({success: ''});
		  	self.setState({errors: error.response.data.errors});
		  });
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<Page id="create-product">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Create Product</h3>
							<label htmlFor="id">ISBN:</label>
							<input type="text" name="id" placeholder="ISBN" className="full-width" value={this.state.form.id} onChange={this.handleChange.bind(this, 'id')} />
							<label htmlFor="name">Name:</label>
							<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.form.name} onChange={this.handleChange.bind(this, 'name')} />
							<label htmlFor="description">Description:</label>
							<input type="text" name="description" placeholder="Description" className="full-width" value={this.state.form.description} onChange={this.handleChange.bind(this, 'description')} />
							<label htmlFor="price">Price:</label>
							<input type="number" name="price" placeholder="Price" min="0.01" step="0.01" className="full-width" value={this.state.form.price} onChange={this.handleChange.bind(this, 'price')} />
							<label htmlFor="imgUrl">Image URL:</label>
							<input type="text" name="imgUrl" placeholder="Image URL" className="full-width" value={this.state.form.imgUrl} onChange={this.handleChange.bind(this, 'imgUrl')} />
							
							<label>Preview:</label>
							<div className="img-container">
								<img src={this.state.form.imgUrl} alt={this.state.form.name} />
							</div>

							<label htmlFor="stock">Stock:</label>
							<input type="number" name="stock" placeholder="Stock" className="full-width" value={this.state.form.stock} onChange={this.handleChange.bind(this, 'stock')} />
							<label htmlFor="deliveryDays">Delivery:</label>
							<input type="number" name="deliveryDays" placeholder="Delivery days" className="full-width" value={this.state.form.deliveryDays} onChange={this.handleChange.bind(this, 'deliveryDays')} />

							<LoaderAndAlert loading={this.state.loading} success={this.state.success} errors={this.state.errors} />

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
