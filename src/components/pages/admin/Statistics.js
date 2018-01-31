import React, { Component } from 'react';

import Iframe from 'react-iframe';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import '../../../styles/Statistics.css';

import Page from '../../Page';
import CardContainer from '../../CardContainer';

import {PieChart} from 'react-easy-chart';

var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class Statistics extends Component {
	constructor(props){
		super(props);

		this.state = {
			products: [],
			productsNotInStock: []
		};

		axios.get(config.api + '/product/not-in-stock', {
			headers: { Authorization: "Bearer " + sessionStorage.getItem('token') }
		})
		.then(function(response){
			this.setState({productsNotInStock: response.data});
		}.bind(this));

		axios.get(config.api + '/product')
		.then(function(response){
			this.setState({products: response.data});
		}.bind(this));
	}

	render() {
		return (
			<Page id="statistics">
				<Row>
					<Col md={8}>
						<CardContainer>
							<h3>Heatmap of Previous Orders</h3>
							<Iframe  url="http://localhost:3000/map.html"
								display="initial"
        						position="relative"
        						height="450px"
							/>
						</CardContainer>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Products in/out of Stock</h3>
							<div className="chart-container">
								<PieChart
									labels
									size={250}
									data={[
									{ key: 'In Stock: ' + (this.state.products.length - this.state.productsNotInStock.length), value: this.state.products.length - this.state.productsNotInStock.length },
									{ key: 'Out of Stock: ' + this.state.productsNotInStock.length, value: this.state.productsNotInStock.length }
									]}
								/>
							</div>
						</CardContainer>
						<CardContainer>
							<h3>Products out of Stock</h3>
							{this.state.productsNotInStock.map(function(product){
								return (
									<div className="product"><span className="name"><a href={"/product/" + product.id}>{product.name}</a></span></div>
								);
							})}
						</CardContainer>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default Statistics;
