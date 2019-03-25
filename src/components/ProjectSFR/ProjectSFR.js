import React from 'react';
import { Button, Card, CardHeader, CardImg, CardText, CardBody, CardFooter, CardLink,
  CardTitle, CardSubtitle, Col, Row } from 'reactstrap';

const ProjectSFR = (props) => {
  return (
    <div>
      <Card className="mb-2">
        <CardBody>
        <CardHeader>
          <CardTitle tag="h3" className="text-center"><a href="https://summerfoodrocks.org">summerfoodrocks.org</a></CardTitle>
          <CardSubtitle className="text-center">A Summer Meals Site Finder and Electronic Meal Counter app</CardSubtitle>
          </CardHeader>
        <img width="80%" src="assets/images/sfr-screenshot.png" alt="SFR screenshot" />

          <CardText>The site features a Summer Meals Site Finder which utilizes an API from the USDA as its data source. There is also an electronic Meal Counter App, which is approved for replacing the paper meal count form available from the USDA.</CardText>
          <CardText tag="em">Ubuntu, Nginx, MySql, PHP, LetsEncrypt, Node.js, Express, Handlebars, Bootstrap</CardText>

          <Row className="text-center mt-2">
          <Col sm={{ size: 'auto', offset: 1 }}><Button href="https://summerfoodrocks.org" target="_blank"><i className="fas fa-external-link-alt"></i>Visit the website</Button></Col>
          <Col sm={{ size: 'auto', offset: 1 }}><Button href="https://github.com/martinvicknair/summerfoodrocks-node" target="_blank"><i className="fab fa-github"></i>View code on GitHub</Button></Col>
          </Row>

        </CardBody>
        <CardFooter />
      </Card>
    </div>
  );
};

export default ProjectSFR;
