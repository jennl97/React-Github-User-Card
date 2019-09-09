import React from 'react';

let UserCard = props => {
    
    return(
      <div className ="app">
        <div className="userCard">
          <h2>User Name: {props.followers.login}</h2>
          <p>ID Number: {props.followers.id}</p>
          <p>User Type: {props.followers.type}</p>
        </div>
        </div>
    )
}

export default UserCard;