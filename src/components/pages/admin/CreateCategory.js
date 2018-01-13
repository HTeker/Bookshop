import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';
import LoaderAndAlert from '../../LoaderAndAlert';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class CreateCategory extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: false,
			success: '',
			errors: '',

			form: {
				name: ''
			}
		};
	}

	submit() {
		this.setState({loading: true});
		this.setState({success: ''});
		this.setState({errors: ''});
		const self = this;

		axios.post(config.api + '/category', this.state.form)
		  .then(function (response) {
		  	self.setState({loading: false});
		  	self.setState({success: response.statusText});
	  		self.setState({errors: ''});
		  })
		  .catch(function(error){
		  	self.setState({loading: false});
		  	self.setState({success: ''});
		  	self.setState({errors: error.response.data.errors});
		  });
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<Page id="create-category">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Create Category</h3>
							<label htmlFor="name">Name:</label>
							<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.form.name} onChange={this.handleChange.bind(this, 'name')} />

							<LoaderAndAlert loading={this.state.loading} success={this.state.success} errors={this.state.errors} />

							<button className="btn primary-btn btn-full-width" onClick={this.submit.bind(this)}>Create</button>
						</CardContainer>
					</Col>
					<Col md={4}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default CreateCategory;
