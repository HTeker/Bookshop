import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

import Page from '../Page';
import CardContainer from '../CardContainer';

class OrderPlaced extends Component {
	render() {
		return (
			<Page>
				<Row>
					<Col></Col>
					<Col>
						<CardContainer>
							<p>Order is placed.</p>
						</CardContainer>
					</Col>
					<Col></Col>
				</Row>
			</Page>
		);
	}
}

export default OrderPlaced;
