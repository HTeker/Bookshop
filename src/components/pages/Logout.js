import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../Page';
import CardContainer from '../CardContainer';
import ProductItem from '../ProductItem';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class Logout extends Component {

	componentDidMount() {
		sessionStorage.removeItem('token');

		setTimeout(function () {
			window.location.href = "//" + window.location.host;
	    }, 3000);
	}

	render() {
		return (
			<Page id="search">
				<Row>
					<Col></Col>
					<Col>
						<CardContainer>
							You are successfully logged out.
						</CardContainer>
					</Col>
					<Col></Col>
				</Row>
			</Page>
		);
	}
}

export default Logout;