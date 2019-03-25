import React from 'react';
import { Button, Card, CardHeader, CardImg, CardText, CardBody, CardFooter, CardLink,
  CardTitle, CardSubtitle, Col, Row } from 'reactstrap';

const About = (props) => {
  return (
    <div>
      <Card className="mb-2">
        <CardBody>
        <CardText className="mt-1">This website built with Create-React-App</CardText>


<Button href="https://github.com/martinvicknair/martinvicknair.github.io" target="_blank"><i className="fab fa-github"></i>View code on GitHub</Button>

        </CardBody>
        <CardFooter />
      </Card>
    </div>
  );
};

export default About;
