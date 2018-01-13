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
					<div className="alert alert-success">{this.props.success}</div>
				: null }

				{(this.props.errors) ?
					<div className="alert alert-error">
						<ul>
							{this.props.errors.map(function(error){
								if(error.message){
									return (<li key={error.message}>{error.message}</li>);
								}else{
									return (<li key={error}>{error}</li>);
								}
							})}
						</ul>
					</div>
				: null }
			</div>
		);
	}
}

export default LoaderAndAlert;
