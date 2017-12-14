import React, { Component } from 'react';
import '../../../styles/EditProduct.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';
import LoaderAndAlert from '../../LoaderAndAlert';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class EditProduct extends Component {
	constructor(props){
		super(props);

		this.state = {
			product: null,
			categories: null,

			loading: false,
			success: null,
			error: null,
			

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

		axios.get(config.api + '/product/' + this.props.match.params.id)
		  .then(function (response) {
		  	this.setState({form: response.data});
		  }.bind(this));

		axios.get(config.api + '/category')
		  .then(function (response) {
		  	this.setState({categories: response.data});
		  }.bind(this));
	}

	submit() {
		this.setState({loading: true});
		this.setState({success: null});
		this.setState({error: null});
		const self = this;

		axios.put(config.api + '/product/' + this.props.match.params.id, this.state.form)
		  .then(function (response) {
		  	self.setState({loading: false});
		  	self.setState({success: response});
	  		self.setState({error: ''});
		  })
		  .catch(function(error){
		  	self.setState({loading: false});
		  	self.setState({success: ''});
		  	self.setState({error: error.response});
		  });
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<Page id="login">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						{(this.state.form.id) ?
							<CardContainer>
								<h3>Edit Product</h3>
								<label htmlFor="id">ISBN:</label>
								<input type="text" name="id" className="full-width" value={this.state.form.id} readOnly />
								<label htmlFor="name">Name:</label>
								<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.form.name} onChange={this.handleChange.bind(this, 'name')} />
								<label htmlFor="description">Description:</label>
								<input type="text" name="description" placeholder="Description" className="full-width" value={this.state.form.description} onChange={this.handleChange.bind(this, 'description')} />
								<label htmlFor="price">Price:</label>
								<input type="number" name="price" placeholder="Price" step="0.01" className="full-width" value={this.state.form.price} onChange={this.handleChange.bind(this, 'price')} />
								<label htmlFor="imgUrl">Image URL:</label>
								<input type="text" name="imgUrl" placeholder="Image URL" className="full-width" value={this.state.form.imgUrl} onChange={this.handleChange.bind(this, 'imgUrl')} />
								<label htmlFor="stock">Stock:</label>
								<input type="number" name="stock" placeholder="Stock" className="full-width" value={this.state.form.stock} onChange={this.handleChange.bind(this, 'stock')} />
								<label htmlFor="deliveryDays">Delivery:</label>
								<input type="number" name="deliveryDays" placeholder="Delivery days" className="full-width" value={this.state.form.deliveryDays} onChange={this.handleChange.bind(this, 'deliveryDays')} />

								<LoaderAndAlert loading={this.state.loading} success={this.state.success} error={this.state.error} />

								<button className="btn primary-btn btn-full-width" onClick={this.submit.bind(this)}>Edit</button>
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
