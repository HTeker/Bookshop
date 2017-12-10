import React, { Component } from 'react';
import '../styles/Sidebar.css';
import CardContainer from './CardContainer';

class Sidebar extends Component {
  render() {
    return (
      <div>
      	<CardContainer>
      		<h3>Recently Added</h3>
      		<ul>
	      		<li><a href="#">Book #1</a></li>
	      		<li><a href="#">Book #1</a></li>
	      		<li><a href="#">Book #1</a></li>
	      		<li><a href="#">Book #1</a></li>
	      		<li><a href="#">Book #1</a></li>
      		</ul>
      	</CardContainer>
      </div>
    );
  }
}

export default Sidebar;
