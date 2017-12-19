import React, { Component } from 'react';

import Header from './Header';
import Navigation from './Navigation';
import PageContent from './PageContent';

class Page extends Component {

	render() {
		return (
			<div id={this.props.id}>
				<Header />
				<Navigation numberOfItemsInCart={this.props.numberOfItemsInCart} />
				<PageContent>
					{this.props.children}
				</PageContent>
			</div>
		);
	}
}

export default Page;
