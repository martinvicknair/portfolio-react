import React from 'react';
import { Button, Card, CardHeader, CardImg, CardText, CardBody, CardFooter, CardLink,
  CardTitle, CardSubtitle, Col, Row } from 'reactstrap';

const ProjectLFDLT = (props) => {
  return (
    <div>
      <Card className="mb-2">
        <CardBody>
        <CardHeader>
          <CardTitle tag="h3" className="text-center"><a href="https://luisfelipedelatorre.com">luisfelipedelatorre.com</a></CardTitle>

          </CardHeader>
        <img width="80%" src="assets/images/lfdlt-screenshot.png" alt="LFDLT screenshot" />

          <CardText>Fully responsive, mobile-first WordPress site showcasing the portfolio of Mexican artist Luis Felipe de la Torre. In Spanish. Server configuration and install.</CardText>
          <CardText tag="em">Ubuntu, Apache, MySql, PHP, LetsEncrypt, WordPress, Yoast SEO</CardText>

          <Row className="text-center mt-2">
<Col sm={{ size: 'auto', offset: 1 }}><Button href="https://luisfelipedelatorre.com" target="_blank"><i className="fas fa-external-link-alt"></i>Visit the website</Button></Col>
</Row>

        </CardBody>
        <CardFooter />
      </Card>
    </div>
  );
};

export default ProjectLFDLT;
