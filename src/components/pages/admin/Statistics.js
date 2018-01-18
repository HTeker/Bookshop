import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';

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

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: 37.775, lng: -122.434}}
  >
    <HeatmapLayer options={{radius: 100}} data={[new window.google.maps.LatLng(37.775, -122.434)]} />
  </GoogleMap>
));


class Statistics extends Component {
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
