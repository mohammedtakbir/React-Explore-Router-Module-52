import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h2>{friend.name}</h2>
            <h4>Email: {friend.email}</h4>
            <p>
                <small>
                    <Link to={`/friend/${friend.id}`}>{friend.username}</Link>
                </small>
            </p>
        </div>
    );
};

export default Friend;