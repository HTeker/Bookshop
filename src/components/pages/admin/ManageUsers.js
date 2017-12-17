import React, { Component } from 'react';
import '../../../styles/ManageUsers.css';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';
import UserItemInList from '../../UserItemInList';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class ManageUsers extends Component {
	constructor(props){
		super(props);

		this.filterUsers = this.filterUsers.bind(this);

		this.state = {
			users: [],
			filteredUsers: [],
			form: {
				filter: null
			}
		};

		axios.get(config.api + '/user')
		  .then(function (response) {
		  	this.setState({users: response.data});
		  	this.setState({filteredUsers: response.data});
		  }.bind(this));
	}

	removeItem(user){
		console.log("Removing from parent:");
		console.log(user);
	}

	handleChange(name, e) {
		console.log(this.state.users);
		console.log(typeof this.state.users);
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);

		this.filterUsers();
	}

	filterUsers(){
		const users = this.state.users.filter(function(item){
			return item.name.toLowerCase().search(this.state.form.filter.toLowerCase()) !== -1;
		}.bind(this));

		this.setState({filteredUsers: users});
	}

	render() {
		return (
			<Page id="manage-users">
				<Row>
					<Col md={3}>
					</Col>
					<Col md={6}>
						<CardContainer>
							<h3>Manage Users</h3>
							<input type="text" name="filter" placeholder="Filter..." className="full-width" value={this.state.filter} onChange={this.handleChange.bind(this, 'filter')} />
						</CardContainer>
						<CardContainer>
							{(this.state.users.length !== 0) ? 
								this.state.filteredUsers.map(function(user){
									return(<UserItemInList user={user} key={user.id} removeHandler={this.removeItem} />);
								}.bind(this))
							: <p>No users yet</p> }
						</CardContainer>
					</Col>
					<Col md={3}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default ManageUsers;
