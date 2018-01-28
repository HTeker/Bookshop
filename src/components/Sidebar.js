import React, { Component } from 'react';
import CardContainer from './CardContainer';
import axios from 'axios';

var env = process.env.NODE_ENV || 'development',
    config = require('../config')[env];

class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {
      randomCategories: [],
      newCategories: []
    };

    axios.get(config.api + '/category/random')
      .then(function (response) {
        this.setState({randomCategories: response.data.slice(0, 6)});
      }.bind(this));

    axios.get(config.api + '/category/newest')
      .then(function (response) {
        this.setState({newCategories: response.data.slice(0, 6)});
      }.bind(this));
  }

  render() {
    return (
      <div>
      	<CardContainer>
      		<h3>Random Categories</h3>
      		<ul>
            {this.state.randomCategories.map(function(category){
              return(<li key={category.id}><a href={"/category/" + category.id}>{category.name}</a></li>);
            })}
      		</ul>
      	</CardContainer>
        <CardContainer>
          <h3>New Categories</h3>
          <ul>
            {this.state.newCategories.map(function(category){
              return(<li key={category.id}><a href={"/category/" + category.id}>{category.name}</a></li>);
            })}
          </ul>
        </CardContainer>
      </div>
    );
  }
}

export default Sidebar;
