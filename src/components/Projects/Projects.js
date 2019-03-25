import React from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import ProjectSFR from '../ProjectSFR/ProjectSFR';
import ProjectLFDLT from '../ProjectLFDLT/ProjectLFDLT';
import ProjectR14 from '../ProjectR14/ProjectR14';

const Projects = (props) => {
  return (
    <div>
      <Card className="mb-2">
        <CardHeader tag="h2">Current Projects</CardHeader>
        <CardBody>
        <ProjectSFR />
        <ProjectLFDLT />
        <ProjectR14 />


        </CardBody>
      </Card>
    </div>
  );
};

export default Projects;
