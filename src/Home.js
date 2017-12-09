import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import PageContent from './PageContent';

class Home extends Component {
  render() {
    return (
      <div>
        <PageContent>
          Dit is de content
        </PageContent>
      </div>
    );
  }
}

export default Home;
