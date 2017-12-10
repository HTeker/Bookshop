import React, { Component } from 'react';
import '../styles/PageContent.css';

class PageContent extends Component {
	render() {
		return (
			<div id="page-content">
				{this.props.children}
			</div>
		);
	}
}

export default PageContent;
