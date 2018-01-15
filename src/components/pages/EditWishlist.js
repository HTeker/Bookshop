import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

import Page from '../Page';
import CardContainer from '../CardContainer';
import LoaderAndAlert from '../LoaderAndAlert';

import WishlistHelper from '../../helpers/WishlistHelper';

class EditWishlist extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: false,
			success: null,
			errors: null,
			

			form: {
				name: ''
			}
		};
	}

	componentDidMount(){
		this.setState({form: WishlistHelper.getWishlistById(this.props.match.params.id)});
	}

	submit(){
		this.setState({loading: true});
		this.setState({success: ''});
		this.setState({errors: ''});

		if(this.state.form.name.length > 3){
			const response = WishlistHelper.updateWishlistById(this.props.match.params.id, this.state.form);
			this.setState({loading: false});

			if(response.status == 200){
				this.setState({success: 'Wishlist is updated.'});
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
			<Page id="edit-wishlist">
				<Row>
					<Col md={4}>
					</Col>
					<Col md={4}>
						{(this.state.form.name) ?
							<CardContainer>
								<h3>Edit Wishlist</h3>
								<label htmlFor="name">Name:</label>
								<input type="text" name="name" placeholder="Name" className="full-width" value={this.state.form.name} onChange={this.handleChange.bind(this, 'name')} />

								<LoaderAndAlert loading={this.state.loading} success={this.state.success} errors={this.state.errors} />

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

export default EditWishlist;