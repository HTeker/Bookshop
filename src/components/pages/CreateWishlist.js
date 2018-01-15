import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

import Page from '../Page';
import CardContainer from '../CardContainer';
import LoaderAndAlert from '../LoaderAndAlert';

import WishlistHelper from '../../helpers/WishlistHelper';

class CreateWishlist extends Component {
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
		if(this.state.form.name.length > 3){
			const response = WishlistHelper.createWishlist(this.state.form);
			this.setState({loading: false});

			if(response.status == 201){
				this.setState({success: 'Wishlist is created.'});
				this.setState({errors: ''});
			}else{
				this.setState({success: ''});
				this.setState({errors: response.data.errors});
			}

		}else{
			this.setState({loading: false});
			this.setState({errors: ['Name should have at least 3 characters.']});
		}
	}

	handleChange(name, e) {
		var change = {form: this.state.form};
		change.form[name] = e.target.value;
		this.setState(change);
	}

	render() {
		return (
			<Page id="create-wishlist">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Create Wishlist</h3>
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

export default CreateWishlist;