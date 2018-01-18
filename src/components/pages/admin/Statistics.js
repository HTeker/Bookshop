import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

import Page from '../../Page';
import CardContainer from '../../CardContainer';

class Statistics extends Component {
	render() {
		return (
			<Page id="statistics">
				<Row>
					<Col md={8}>
						<CardContainer>
							<h3>Heatmap</h3>
							
						</CardContainer>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Charts</h3>
						</CardContainer>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default Statistics;
