import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="header clearfix">
        <img className="profile-image img-fluid float-left"  src="assets/images/profile.jpg" alt="Martin Vicknair" width="160" />
        <div className="profile-content float-left">
          <h1 className="name">Martin Vicknair</h1>
          <h2 className="desc">Web Developer</h2>
          <ul className="social list-inline">
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/martinvicknair/"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="list-inline-item"><a href="https://github.com/martinvicknair/"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>
        <a className="btn btn-cta-primary float-right" href="#contactInfo"><i className="fas fa-paper-plane"></i> Contact Me</a>
      </Jumbotron>
    </div>
  );
};

export default Header;
