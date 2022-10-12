import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Detail about: {friend.name}</h1>
            <p>cell: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;