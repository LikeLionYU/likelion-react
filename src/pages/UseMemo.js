import React, { useState } from 'react';
import ShowState from './ShowState';

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    const increaseNumber= () =>{
        setNumber((prev)=> prev+1);
    };
    const decreaseNumber = () => {
        setNumber((prev) => prev-1);
    };

    const onChangeText = (e) =>{
        setText(e.target.value);
    };

    return (
        <div>
            <button onClick={increaseNumber}>+</button>
            <button onClick={decreaseNumber}>-</button>
            <input
                type="text"
                placeholder="Enter"
            onChange={onChangeText}
            />
            <ShowState number={number} text={text}/>
        </div>
    );
};

export default UseMemo;