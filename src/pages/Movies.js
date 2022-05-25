import React from 'react';
import { Link, NavLink, useLocation, Outlet } from 'react-router-dom';


const Movies = () => {
    // const qs = useLocation();
    const style = {
        color : 'green'
    };

    return (
        <div>
            <h1>내가 좋아하는 영화 모음</h1>
            <ul>
                <li>
                    <NavLink 
                        to="/movies/1"
                        style={ ({isActive}) =>  isActive ? style : undefined}
                    >어바웃타임</NavLink>
                </li>
                <li>
                    <Link to="/movies/2">미비포유</Link>
                </li>
                <li>
                    <Link to="/movies/3">블랙팬서</Link>
                </li>
                <li>
                    <Link to="/movies/4">아이언맨</Link>
                </li>
            </ul>
            {/* query string */}
            {/* <div>
                <h3>쿼리스트링</h3>
                <p>{qs.search}</p>
            </div> */}
            <hr/>
            <Outlet />
        </div>
    );
};

export default Movies;