import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import RandomQuote, { getRandomQuote } from './RandomQuote';


export default class advancedpage extends Component {
  render() {
    return (
      <div>
        <Container>
          <p>advancedpage</p>
          <RandomQuote />
        </Container>
      </div>
    )
  }
}