import React, { Component } from 'react';
import '../../styles/Home.css';
import Page from '../Page';
import Sidebar from '../Sidebar';
import { Row, Col } from 'react-grid-system';
import CardContainer from '../CardContainer';
import ProductItem from '../ProductItem';

const products = [
  { id: '0132350886', name: 'Clean Code : A Handbook of Agile Software Craftsmanship', price: 19.99, imgUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg'},
  { id: '0552565970', name: 'Wonder', price: 7.30, imgUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5525/9780552565974.jpg'},
  { id: '0008164657', name: 'Bad Dad', price: 9.17, imgUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0081/9780008164652.jpg'},
  { id: '1847399304', name: 'The Bro Code', price: 8.01, imgUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8473/9781847399304.jpg'},
  { id: '0099519852', name: 'The Talent Code : Greatness isn\'t born. It\'s grown', price: 9.59, imgUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0995/9780099519850.jpg'}
];

class Home extends Component {
  render() {
    return (
      <Page id="home">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <CardContainer>
              <h3>Bestselling Books</h3>
              {products.map(function(product){
                return(<ProductItem product={product} />);
              })}
            </CardContainer>
            <CardContainer>
              <h3>New Books</h3>
              {products.map(function(product){
                return(<ProductItem product={product} />);
              })}
            </CardContainer>
            <CardContainer>
              <h3>Best Rated Books</h3>
              {products.map(function(product){
                return(<ProductItem product={product} />);
              })}
            </CardContainer>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Home;
