import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';

import Page from '../../Page';
import CardContainer from '../../CardContainer';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

/*const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <HeatmapLayer defaultData={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
);*/

const google = window.google;

var env = process.env.NODE_ENV || 'development',
    config = require('../../../config')[env];

var data = [];

axios.get(config.api + '/orders', {
		headers: { Authorization: "Bearer " + sessionStorage.getItem('token') }
	})
	.then(function (response) {
		response.data.forEach(function(customer){
			if(customer.lat && customer.lng && customer.orders.length > 0){
				//console.log(window.google);
				data.push(new window.google.maps.LatLng(customer.lat, customer.lng));
			}
		});
	}.bind(this));

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: 52.3702160, lng: 4.8951680}}
  >
    <HeatmapLayer options={{radius: 10}} data={data} />
  </GoogleMap>
));


class Statistics extends Component {
	componentDidMount(){
		console.log(window.google);
	}

	render() {
		return (
			<Page id="statistics">
				<Row>
					<Col md={8}>
						<CardContainer>
							<h3>Heatmap</h3>
							<MapWithAMarker
								googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnMgPPbPeCQKL4TvKRW5Dw26wYHOE14pk&libraries=visualization"
								loadingElement={<div style={{ height: `100%` }} />}
							  	containerElement={<div style={{ height: `400px` }} />}
							  	mapElement={<div style={{ height: `100%` }} />}
							/>
						</CardContainer>
					</Col>
					<Col md={4}>
						<CardContainer>
							<h3>Charts</h3>
						</CardContainer>
					</Col>
				</Row>
			</Page>
		);
	}
}

export default Statistics;
