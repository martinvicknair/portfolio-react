import React,
{
Component
}

from 'react';

import {
// Button,
Container,
// Row,
// Col,
// Navbar,
// NavbarBrand,
}

from 'reactstrap';
import About from './components/About/About';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import GitHubSection from './components/GitHubSection/GitHubSection';



class App extends Component {

render() {
return (< Container>
  < Header />
    < About />
      < Projects />
        < GitHubSection />
          < /Container>) } } export default App;