import React, { useRef } from 'react';
import { useState, useEffect } from 'react';



const UseEffect = () => {
    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(0);
    const time = useRef(60);
    const timerId = useRef(null);


    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setMin(parseInt(time.current / 60));
            setSec(time.current % 60);
            time.current -= 1;
        }, 100);
        return () => clearInterval(timerId.current);
    }, []);

    useEffect(()=>{
        if(time.current === 0){
            console.log("타임 아웃");
            clearInterval(timerId.current);
        }
    }, [sec]);

    return (
        <div>
            {min}분 {sec}초
        </div>
    );
};

export default UseEffect;