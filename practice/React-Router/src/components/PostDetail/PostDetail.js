import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${postDetail.userId}`);
    }
    return (
        <div>
            <h1>post: {postDetail.id}</h1>
            <h3>{postDetail.title}</h3>
            <p><small>{postDetail.body}</small></p>
            <button onClick={handleNavigate}>author</button>
        </div>
    );
};

export default PostDetail;