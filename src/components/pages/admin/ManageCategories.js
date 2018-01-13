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
				filter: ""
			}
		};

		this.refreshData();
	}

	removeItem(category){
        axios.delete(config.api + '/category/' + category.id, {
				headers: { Authorization: "Bearer " + sessionStorage.getItem('token') }
			})
            .then(function(response){
                this.refreshData();
            }.bind(this));
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);

		this.filterCategories();
	}

    refreshData(){
        axios.get(config.api + '/category')
          .then(function (response) {
              this.setState({categories: response.data}, () => {
                this.filterCategories();
            });
          }.bind(this));
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
									return(<CategoryItemInList category={category} key={category.id} removeHandler={this.removeItem.bind(this)} />);
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
