import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import PipeToLocalePrice from '../../../pipes/PipeToLocalePrice';

import Page from '../../Page';
import CardContainer from '../../CardContainer';

var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class Orders extends Component {
	constructor(props){
		super(props);

		this.state = {
			orders: []
	    };

	    axios.get(config.api + '/user/' + JSON.parse(sessionStorage.getItem('user')).email + '/order', {
				headers: { Authorization: "Bearer " + sessionStorage.getItem('token') }
			})
	      .then(function (response) {
	        this.setState({orders: response.data});
	      }.bind(this));
	}

	render() {
		return (
			<Page>
				<Row>
					<Col md={3}></Col>
					<Col md={6}>
						<CardContainer>
							<h3>Orders</h3>

							<table className="order-table">
								<tr>
									<th>Ordered at</th>
									<th>Status</th>
									<th>Total Price</th>
								</tr>
								{this.state.orders.map(function(order){
									return (
										<tr>
											<td>{(new Date(order.orderedAt)).toLocaleDateString()} {(new Date(order.orderedAt)).toLocaleTimeString()}</td>
											<td>{order.status}</td>
											<td>{PipeToLocalePrice(order.totalPrice)}</td>
										</tr>
									);
								})}
							</table>
						</CardContainer>
					</Col>
					<Col md={3}></Col>
				</Row>
			</Page>
		);
	}
}

export default Orders;
