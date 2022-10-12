import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, username, email, id} = friend;
    return (
        <div>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <p>
                <small>
                    <Link to={`/friend/${id}`}>{username}</Link>
                </small>    
            </p>
        </div>
    );
};

export default Friend;