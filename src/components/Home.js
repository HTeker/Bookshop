import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/Home.css';
import PageContent from './PageContent';
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-grid-system';
import CardContainer from './CardContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <PageContent>
          <Container>
            <Row>
              <Col md={3}>
                <Sidebar />
              </Col>
              <Col md={9}>
                <CardContainer>
                  <h3>Bestselling Books</h3>
                  
                </CardContainer>
              </Col>
            </Row>
          </Container>
        </PageContent>
      </div>
    );
  }
}

export default Home;
