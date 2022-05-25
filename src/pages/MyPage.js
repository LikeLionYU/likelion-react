import React from 'react';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
    const flag = false;

    if(!flag) return <Navigate to="/login" replace={true} />

    return (
        <div>
            <input type='text' placeholder="입력"></input>
        </div>
    );
};

export default MyPage;