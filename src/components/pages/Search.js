import React, { Component } from 'react';
import '../../styles/Search.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../Page';
import CardContainer from '../CardContainer';
import ProductItem from '../ProductItem';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class Search extends Component {

	constructor(props){
		super(props);

		this.state = {
			products: null
		};

		axios.get(config.api + '/product/search/' + this.props.match.params.query)
		  .then(function (response) {
		  	this.setState({products: response.data});
		  }.bind(this));
	}

	render() {
		return (
			<Page id="search">
				<Row>
					<Col>
						<CardContainer>
							<h3>Search results for '{this.props.match.params.query}'</h3>
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

export default Search;