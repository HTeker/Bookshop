import React, { Component } from 'react';
import CardContainer from './CardContainer';

const categories = [
  {id: 1, name: 'Category #1'},
  {id: 2, name: 'Category #2'},
  {id: 3, name: 'Category #3'},
  {id: 4, name: 'Category #4'},
  {id: 5, name: 'Category #5'},
  {id: 6, name: 'Category #6'},
  {id: 7, name: 'Category #7'},
  {id: 8, name: 'Category #8'},
  {id: 9, name: 'Category #9'},
  {id: 10, name: 'Category #10'}
];

class Sidebar extends Component {
  render() {
    return (
      <div>
      	<CardContainer>
      		<h3>Popular Categories</h3>
      		<ul>
            {categories.map(function(category){
              return(<li key={category.id}><a href={"/category/" + category.id}>{category.name}</a></li>);
            })}
      		</ul>
      	</CardContainer>
        <CardContainer>
          <h3>New Categories</h3>
          <ul>
            {categories.map(function(category){
              return(<li key={category.id}><a href={"/category/" + category.id}>{category.name}</a></li>);
            })}
          </ul>
        </CardContainer>
      </div>
    );
  }
}

export default Sidebar;
