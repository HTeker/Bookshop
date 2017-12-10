import React, { Component } from 'react';
import '../styles/Sidebar.css';
import CardContainer from './CardContainer';

const categories = [
  {name: 'Category #1'},
  {name: 'Category #2'},
  {name: 'Category #3'},
  {name: 'Category #4'},
  {name: 'Category #5'},
  {name: 'Category #6'},
  {name: 'Category #7'},
  {name: 'Category #8'},
  {name: 'Category #9'},
  {name: 'Category #10'}
];

class Sidebar extends Component {
  render() {
    return (
      <div>
      	<CardContainer>
      		<h3>Popular Categories</h3>
      		<ul>
            {categories.map(function(category){
              return(<li><a href="#">{category.name}</a></li>);
            })}
      		</ul>
      	</CardContainer>
        <CardContainer>
          <h3>New Categories</h3>
          <ul>
            {categories.map(function(category){
              return(<li><a href="#">{category.name}</a></li>);
            })}
          </ul>
        </CardContainer>
      </div>
    );
  }
}

export default Sidebar;
