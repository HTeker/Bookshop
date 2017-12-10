import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import PageContent from './PageContent';
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-grid-system';

class Home extends Component {
  render() {
    return (
      <div>
        <PageContent>
          <Container>
            <Row>
              <Col sm={3}>
                <Sidebar />
              </Col>
              <Col sm={9}>
                Main content
              </Col>
            </Row>
          </Container>
        </PageContent>
      </div>
    );
  }
}

export default Home;
