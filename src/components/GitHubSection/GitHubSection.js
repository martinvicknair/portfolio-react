import React from 'react';
import { Button, Card, CardHeader, CardImg, CardText, CardBody, CardFooter, CardLink,
CardTitle, CardSubtitle, Col, Row } from 'reactstrap';
import GitHubCalendar from 'github-calendar';
import "./GitHubCalendar.css";
import GitHubActivity from "../GitHubActivity/GitHubActivity";


class GitHubSection extends React.Component {
// constructor() {
// super();
// this.state = { someKey: 'someValue' };
// }

render() {
return <div>
  <Card className="mb-2">
    <CardHeader tag="h2"><i className="fab fa-github"></i> GitHub Activity</CardHeader>
    <CardBody>
      <div id="github-graph" className="github-graph">
      </div>
      <div>
        <GitHubActivity />
      </div>
    </CardBody>
    <CardFooter />
  </Card>
</div>;
}

componentDidMount() {
GitHubCalendar("#github-graph", "martinvicknair", { responsive: true }) ;
}
}

export default GitHubSection;