import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';
import CategoryItemInList from '../../CategoryItemInList';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class ManageCategories extends Component {
	constructor(props){
		super(props);

		this.filterCategories = this.filterCategories.bind(this);

		this.state = {
			categories: [],
			filteredCategories: [],
			form: {
				filter: null
			}
		};

		axios.get(config.api + '/category')
		  .then(function (response) {
		  	this.setState({categories: response.data});
		  	this.setState({filteredCategories: response.data});
		  }.bind(this));
	}

	removeItem(category){
		console.log("Removing from parent:");
		console.log(category);
	}

	handleChange(name, e) {
		console.log(this.state.categories);
		console.log(typeof this.state.categories);
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);

		this.filterCategories();
	}

	filterCategories(){
		const categories = this.state.categories.filter(function(item){
			return item.name.toLowerCase().search(this.state.form.filter.toLowerCase()) !== -1;
		}.bind(this));

		this.setState({filteredCategories: categories});
	}

	render() {
		return (
			<Page id="manage-categories">
				<Row>
					<Col md={3}>
					</Col>
					<Col md={6}>
						<CardContainer>
							<h3>Manage Categories</h3>
							<input type="text" name="filter" placeholder="Filter..." className="full-width" value={this.state.filter} onChange={this.handleChange.bind(this, 'filter')} />
						</CardContainer>
						<CardContainer>
							{(this.state.categories.length !== 0) ? 
								this.state.filteredCategories.map(function(category){
									return(<CategoryItemInList category={category} key={category.id} removeHandler={this.removeItem} />);
								}.bind(this))
							: <p>No categories yet</p> }
						</CardContainer>
					</Col>
					<Col md={3}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default ManageCategories;
