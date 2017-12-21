import React, { Component } from 'react';

class UserItemInList extends Component {
	removeItem(){
		console.log("Removing: " + this.props.user.name);
		this.props.removeHandler(this.props.user);
	}

	render() {
		return (
			<div className="user-item-in-list">
				<a href={"/user/" + this.props.user.email + "/edit"}><h4>{this.props.user.name}</h4></a>
				<button className="btn secondary-btn" onClick={this.removeItem.bind(this)}>Remove</button>
			</div>
		);
	}
}

export default UserItemInList;
