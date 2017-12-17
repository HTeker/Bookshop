import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';
import LoaderAndAlert from '../../LoaderAndAlert';


var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

class EditCategory extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: false,
			success: null,
			error: null,
			

			form: {
				name: ''
			}
		};

		axios.get(config.api + '/category/' + this.props.match.params.id)
		  .then(function (response) {
		  	this.setState({form: response.data});
		  }.bind(this));
	}

	submit() {
		this.setState({loading: true});
		this.setState({success: null});
		this.setState({error: null});
		const self = this;

		axios.put(config.api + '/category/' + this.props.match.params.id, this.state.form)
		  .then(function (response) {
		  	self.setState({loading: false});
		  	self.setState({success: response});
	  		self.setState({error: ''});
		  })
		  .catch(function(error){
		  	self.setState({loading: false});
		  	self.setState({success: ''});
		  	self.setState({error: error.response});
		  });
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<Page id="edit-product">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						{(this.state.form.id) ?
							<CardContainer>
								<h3>Edit Category</h3>
								<label htmlFor="name">Name:</label>
								<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.form.name} onChange={this.handleChange.bind(this, 'name')} />

								<LoaderAndAlert loading={this.state.loading} success={this.state.success} error={this.state.error} />

								<button className="btn primary-btn btn-full-width" onClick={this.submit.bind(this)}>Edit</button>
							</CardContainer>
						: null }
					</Col>
					<Col md={4}>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default EditCategory;
