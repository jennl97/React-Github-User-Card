import React from 'react';
import './App.css';


import UserFollowerList from './components/UserFollowerList';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      userData: {},
      userFollowers: []
    };
  }

  componentDidMount(){
    fetch("https://api.github.com/users/jennl97")
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => this.setState({userData: res}))
      .catch(err => console.log(err));

      fetch("https://api.github.com/users/jennl97/followers")
      .then(res => res.json())
      .then(res => this.setState({userFollowers: res}))
      .catch(err => console.log(err));
  }

 

  render(){
    
    return(
      <div className='app'>
        <div className='userCard'>
        <h2>
         User Name: {this.state.userData.login}
        </h2>
        <p>ID Number: {this.state.userData.id}</p>
        <p>User Type: {this.state.userData.type}</p>
        <p>Followers: {this.state.userData.followers}</p>
        <p>Followers: {this.state.userData.following}</p>
        </div>
        <div>
          <UserFollowerList userFollowers = {this.state.userFollowers} />
        
        </div>
      </div>
    )
  }

}


export default App;
