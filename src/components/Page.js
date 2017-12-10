import React, { Component } from 'react';
import '../styles/Page.css';

import Navigation from './Navigation';
import PageContent from './PageContent';

class Page extends Component {
	render() {
		return (
			<div id={this.props.id}>
				<Navigation />
				<PageContent>
					{this.props.children}
				</PageContent>
			</div>
		);
	}
}

export default Page;
