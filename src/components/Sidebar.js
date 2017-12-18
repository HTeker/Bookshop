import React, { Component } from 'react';
import CardContainer from './CardContainer';
import axios from 'axios';

var env = process.env.NODE_ENV || 'development',
    config = require('../config')[env];

class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {
      categories: []
    };

    axios.get(config.api + '/category')
      .then(function (response) {
        this.setState({categories: response.data});
      }.bind(this));
  }

  render() {
    return (
      <div>
      	<CardContainer>
      		<h3>Popular Categories</h3>
      		<ul>
            {this.state.categories.map(function(category){
              return(<li key={category.id}><a href={"/category/" + category.id}>{category.name}</a></li>);
            })}
      		</ul>
      	</CardContainer>
        <CardContainer>
          <h3>New Categories</h3>
          <ul>
            {this.state.categories.map(function(category){
              return(<li key={category.id}><a href={"/category/" + category.id}>{category.name}</a></li>);
            })}
          </ul>
        </CardContainer>
      </div>
    );
  }
}

export default Sidebar;
