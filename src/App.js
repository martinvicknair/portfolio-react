import React, { Component } from 'react';
import {
  // Button,
  Container,
  // Row,
  // Col,
  // Navbar,
  // NavbarBrand,
} from 'reactstrap';
import Header from './components/Header/Header';
import SectionsWrapper from './components/SectionsWrapper/SectionsWrapper';


class App extends Component {

    render() {
        return (
          <Container fluid>
        <Header />
        <SectionsWrapper>


        </SectionsWrapper>
        </Container>
      )
    }
}

export default App;
