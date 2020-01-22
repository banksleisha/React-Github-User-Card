import React, { Component } from 'react';

class UserCard extends Component {
    state = {
        user: [],
        followers: []
    }
   
    componentDidMount() {
        this.setState({ user: this.props.user, followers: this.props.followers})
    }

    render() {
      return (
        
        <div>
          
          <><div className='image-header'>
            <img src={this.props.user.avatar_url}></img>
        </div></>
        <div>{this.props.user.name}</div>
          <div>
              <div>Username</div>
              <div>{this.props.user.login}</div>
          </div>
          <div>
              <div>Location</div>
              <div>{this.props.user.location}</div>
          </div>
          <div>
              <div>Repositories</div>
              <div>{this.props.user.repos_url}</div>
          </div>
          <div>
              <div>Followers</div>
              <div>{this.props.user.followers}</div>
          </div>
          <div>Followers</div>

          {this.props.followers.map(follower => (
            <div>
            <><div className='image-header'>
            <img src={follower.avatar_url}></img>
        </div></>
            <div className='follower-item'>{follower.login}</div>
        </div>
          ))}
        </div>
      );
    }
  }
  
  export default UserCard;