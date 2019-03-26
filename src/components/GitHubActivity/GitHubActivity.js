import React from 'react';
import GitHubFeed from 'react-github-activity';
import axios from 'axios';

const fullName = 'Martin Vicknair';
    const userName = 'martinvicknair';
    const avatarUrl = 'https://avatars1.githubusercontent.com/u/32040730';
    var events = [];

class GitHubActivity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isFetching: true,
        events: [] 
    };
  }

  render() {
    
    
 /* data result from https://api.github.com/users/${userName}/events */     
    return (
      <div>
<p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
    <GitHubFeed
      fullName={fullName} // Provide Full Name as displayed on GitHub
      userName={userName} // Provide User Name as displayed on Guthub
      avatarUrl={avatarUrl} // Provide the avatar url of your github profile
      events={this.state.events} // provide array of events using the users '/events' endpoint of github api
    />
    </div>
    );
  }
  componentDidMount() {
    const url = `https://api.github.com/users/${userName}/events`;
    axios.get(url)
    .then((response) => {
      this.setState({events: response.data});
      //this.setState({name: response.data.name});
    })
    .catch((e) => 
    {
      console.error(e);
    });

}

}
export default GitHubActivity;