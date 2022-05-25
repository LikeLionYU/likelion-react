import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>메인 페이지</h1>
            <ul>
                <li>
                    <Link to="/movies">영화 모음</Link>
                </li>
                <li>
                    <Link to="/mypage">마이 페이지</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;