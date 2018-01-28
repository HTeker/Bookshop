import React, { Component } from 'react';
import '../../styles/Home.css';
import Page from '../Page';
import Sidebar from '../Sidebar';
import { Row, Col } from 'react-grid-system';
import CardContainer from '../CardContainer';
import ProductItem from '../ProductItem';

import axios from 'axios';

var env = process.env.NODE_ENV || 'development',
    config = require('../../config')[env];

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      randomProducts: [],
      newProducts: []
    };

    axios.get(config.api + '/product/random')
      .then(function (response) {
        this.setState({randomProducts: response.data.slice(0, 6)});
      }.bind(this));

    axios.get(config.api + '/product/newest')
      .then(function (response) {
        this.setState({newProducts: response.data.slice(0, 6)});
      }.bind(this));
  }

  render() {
    return (
      <Page id="home">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <CardContainer>
              <h3>Random Books</h3>
              {this.state.randomProducts.map(function(product){
                return(<ProductItem product={product} key={product.id} />);
              })}
            </CardContainer>
            <CardContainer>
              <h3>New Books</h3>
              {this.state.newProducts.map(function(product){
                return(<ProductItem product={product} key={product.id} />);
              })}
            </CardContainer>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Home;
