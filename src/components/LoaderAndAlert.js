import React, { Component } from 'react';
import '../styles/LoaderAndAlert.css';

class LoaderAndAlert extends Component {
	render() {
		return (
			<div>
				<br />
				{(this.props.loading) ?
					<div className="loader">Loading...</div>
				: null }

				{(this.props.success) ?
					<div className="alert alert-success">{this.props.success.statusText}</div>
				: null }

				{(this.props.error) ?
					<div className="alert alert-error">
						<ul>
							{this.props.error.data.errors.map(function(error){
								return (<li>{error.message}</li>);
							})}
						</ul>
					</div>
				: null }
			</div>
		);
	}
}

export default LoaderAndAlert;
