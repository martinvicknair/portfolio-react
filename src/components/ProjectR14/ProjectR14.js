import React from 'react';
import { Button, Card, CardHeader, CardImg, CardText, CardBody, CardFooter, CardLink,
  CardTitle, CardSubtitle, Col, Row } from 'reactstrap';

const ProjectR14 = (props) => {
  return (
    <div>
      <Card className="mb-2">
        <CardBody>
        <CardHeader>
          <CardTitle tag="h3" className="text-center"><a href="https://realde14.net">realde14.net</a></CardTitle>

          </CardHeader>
        <img width="80%" src="assets/images/r14-screenshot.png" alt="R14 screenshot" />

          <CardText className="mt-1">WordPress site. Mentioned in the "Lonely Planet Mexico (2016)" travel guide as the information resource for Real de Catorce, Mexico. Bilingual English/Spanish.<span className="font-italic"> under renovation</span></CardText>
          <CardText tag="em">Ubuntu, Nginx, MySql, PHP, LetsEncrypt, WordPress, Yoast SEO</CardText>

          <Row className="text-center mt-2">
<Col sm={{ size: 'auto', offset: 1 }}><Button href="https://realde14.net" target="_blank"><i className="fas fa-external-link-alt"></i>Visit the website</Button></Col>
</Row>

        </CardBody>
        <CardFooter />
      </Card>
    </div>
  );
};

export default ProjectR14;
