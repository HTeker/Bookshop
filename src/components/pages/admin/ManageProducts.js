import React, { Component } from 'react';
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
				filter: ""
			}
		};

		this.refreshData();
	}

	removeItem(product){
		axios.delete(config.api + '/product/' + product.id, {
				headers: { Authorization: "Bearer " + sessionStorage.getItem('token') }
			})
			.then(function(response){
				this.refreshData();
			}.bind(this));
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);

		this.filterProducts();
	}

	refreshData(){
		axios.get(config.api + '/product')
		  .then(function (response) {
		  	this.setState({products: response.data}, () => {
				this.filterProducts();
			});
		  }.bind(this));
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
									return(<ProductItemInList product={product} key={product.id} removeHandler={this.removeItem.bind(this)} />);
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
