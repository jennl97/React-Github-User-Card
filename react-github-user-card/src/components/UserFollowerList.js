import React from 'react';

import UserFollowersCard from './UserFollowersCard';

let UserFollowerList = props => {
    return (
        <div>
            {props.userFollowers.map(followers => {
                return(
                <UserFollowersCard key={followers.login} followers={followers} />
                )
            })}
        </div>
    );
}

export default UserFollowerList;