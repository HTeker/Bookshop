import React, { Component } from 'react';
import '../styles/CardContainer.css';

class CardContainer extends Component {
	render() {
		return (
			<div className="card-container">
				{this.props.children}
			</div>
		);
	}
}

export default CardContainer;
