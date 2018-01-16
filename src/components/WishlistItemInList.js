import React, { Component } from 'react';

class WishlistItemInList extends Component {
	removeItem(){
		console.log("Removing: " + this.props.wishlist.name);
		this.props.removeHandler(this.props.wishlist);
	}

	render() {
		return (
			<div className="wishlist-item-in-list">
				<a href={"/wishlist/" + this.props.wishlist.id}><h4>{this.props.wishlist.name}</h4></a>
				<button className="btn secondary-btn" onClick={this.removeItem.bind(this)}>Remove</button>
			</div>
		);
	}
}

export default WishlistItemInList;
