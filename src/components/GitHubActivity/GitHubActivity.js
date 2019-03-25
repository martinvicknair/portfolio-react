import React from 'react';
import GitHubFeed from 'react-github-activity';
 
class GitHubActivity extends React.Component {
  render() {
    const fullName = 'Martin Vicknair';
    const userName = 'martinvicknair';
    const avatarUrl = 'https://avatars1.githubusercontent.com/u/32040730';
    const events = [/* data result from https://api.github.com/users/${userName}/events */];
    
    return (
    <GitHubFeed
      fullName={fullName} // Provide Full Name as displayed on GitHub
      userName={userName} // Provide User Name as displayed on Guthub
      avatarUrl={avatarUrl} // Provide the avatar url of your github profile
      events={events} // provide array of events using the users '/events' endpoint of github api
    />
    );
  }
}
export default GitHubActivity;