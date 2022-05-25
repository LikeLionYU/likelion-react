import React from 'react';
import { useParams } from 'react-router-dom';

const movie = {
    1 : {
        name : '어바웃타임',
    },
    2 : {
        name : '미비포유',
    },
    3 : {
        name : '블랙팬서',
    },
    4 : {
        name : '아이언맨',
    },
};

const Movie = () => {
    const params = useParams();
    const object = movie[params.id];

    return (
        <div>
            { object ?
                <h2>{object.name}</h2>
            :
                <p>존재하지 않는 영화입니다.</p>}
        </div>
    );
};

export default Movie;