import React, { Component } from 'react';
import styled from 'styled-components';


const UserCardBackground=styled.div`
width: 100%
height:100%;
background: #C9D4C5;`

const ImageHeader = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
`

const Userimg = styled.img `
width: 100px;
height: 100px;`

const Username = styled.div`
`
const Followers =styled.img`
height: 100px; 
width: 100px;

`

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
        
        <UserCardBackground>
          
          <><ImageHeader className='image-header'>
            <Userimg src={this.props.user.avatar_url}></Userimg>
        </ImageHeader></>
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
            <Followers src={follower.avatar_url}></Followers>
        </div></>
            <div className='follower-item'>{follower.login}</div>
        </div>
          ))}
        </UserCardBackground>
      );
    }
  }
  
  export default UserCard;