import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetail = useLoaderData();
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/friend/${postDetail.userId}`)
    }
    return (
        <div>
            <h2>Details about post: {postDetail.id}</h2>
            <h4>title: {postDetail.title}</h4>
            <p><small>details: {postDetail.body}</small></p>
            <button onClick={handleNavigate}>author detail</button>
        </div>
    );
};

export default PostDetails;