import React, { Component } from 'react';
import '../../../styles/ManageProducts.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';
import ProductItemInList from '../../ProductItemInList';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class ManageProducts extends Component {
	constructor(props){
		super(props);

		this.filterProducts = this.filterProducts.bind(this);

		this.state = {
			products: [],
			filteredProducts: [],
			form: {
				filter: null
			}
		};

		axios.get(config.api + '/product')
		  .then(function (response) {
		  	this.setState({products: response.data});
		  	this.setState({filteredProducts: response.data});
		  }.bind(this));
	}

	removeItem(product){
		console.log("Removing from parent:");
		console.log(product);
	}

	handleChange(name, e) {
		console.log(this.state.products);
		console.log(typeof this.state.products);
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);

		this.filterProducts();
	}

	filterProducts(){
		const products = this.state.products.filter(function(item){
			return item.name.toLowerCase().search(this.state.form.filter.toLowerCase()) !== -1;
		}.bind(this));

		this.setState({filteredProducts: products});
	}

	render() {
		return (
			<Page id="manage-products">
				<Row>
					<Col md={3}>
					</Col>
					<Col md={6}>
						<CardContainer>
							<h3>Manage Products</h3>
							<input type="text" name="filter" placeholder="Filter..." className="full-width" value={this.state.filter} onChange={this.handleChange.bind(this, 'filter')} />
						</CardContainer>
						<CardContainer>
							{(this.state.products.length !== 0) ? 
								this.state.filteredProducts.map(function(product){
									return(<ProductItemInList product={product} key={product.id} removeHandler={this.removeItem} />);
								}.bind(this))
							: <p>No products yet</p> }
						</CardContainer>
					</Col>
					<Col md={3}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default ManageProducts;
