import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../Page';
import CardContainer from '../CardContainer';
import WishlistItemInList from '../WishlistItemInList';

import WishlistHelper from '../../helpers/WishlistHelper';

class ManageWishlists extends Component {
	constructor(props){
		super(props);

		this.filterWishlists = this.filterWishlists.bind(this);

		this.state = {
			wishlists: [],
			filteredWishlists: [],
			form: {
				filter: ""
			}
		};
	}

	componentDidMount(){
		this.refreshData();
	}

	removeItem(wishlist){
		WishlistHelper.deleteWishlistById(wishlist);
		this.refreshData();
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);

		this.filterWishlists();
	}

	refreshData(){
		let wishlists = WishlistHelper.getWishlists();
		this.setState({wishlists: wishlists}, () => {
			this.filterWishlists();
		});
	}

	filterWishlists(){
		const wishlists = this.state.wishlists.filter(function(item){
			return item.name.toLowerCase().search(this.state.form.filter.toLowerCase()) !== -1;
		}.bind(this));

		this.setState({filteredWishlists: wishlists});
	}

	render() {
		return (
			<Page id="manage-wishlists">
				<Row>
					<Col md={3}>
					</Col>
					<Col md={6}>
						<CardContainer>
							<h3>Manage Wishlists</h3>
							<input type="text" name="filter" placeholder="Filter..." className="full-width" value={this.state.filter} onChange={this.handleChange.bind(this, 'filter')} />
						</CardContainer>
						<CardContainer>
							{(this.state.filteredWishlists.length !== 0) ? 
								this.state.filteredWishlists.map(function(wishlist){
									return(<WishlistItemInList wishlist={wishlist} key={wishlist.id} removeHandler={this.removeItem.bind(this)} />);
								}.bind(this))
							: <p>No wishlists yet</p> }
						</CardContainer>
					</Col>
					<Col md={3}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default ManageWishlists;
