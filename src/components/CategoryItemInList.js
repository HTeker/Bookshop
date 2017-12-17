import React, { Component } from 'react';

class CategoryItemInList extends Component {
	removeItem(){
		console.log("Removing: " + this.props.category.name);
		this.props.removeHandler(this.props.category);
	}

	render() {
		return (
			<div className="category-item-in-list">
				<a href={"/category/" + this.props.category.id + "/edit"}><h4>{this.props.category.name}</h4></a>
				<button className="btn secondary-btn" onClick={this.removeItem.bind(this)}>Remove</button>
			</div>
		);
	}
}

export default CategoryItemInList;
