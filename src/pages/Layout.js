import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goMovies = () => {
        navigate('/movies');
    };

    const goHome = () => {
        navigate('/');
    };

    return (
        <>
            <header style={{
                background : 'gray',
                padding : 15,
                margin : 0
            }}>
                여긴 헤더
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>홈으로</button>
                <button onClick={goMovies}>영화 보러가기</button>
            </footer>
        </>
    );
};

export default Layout;