import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    //? using useLoaderData() hook
    const friends = useLoaderData();
    return (
        <div>
            <h2>i have so many friends {friends.length}</h2>
            {
                friends.map(friend => <Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;