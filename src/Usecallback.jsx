// // import React, { useState, useCallback,useRef,useEffect } from 'react';

import { useState,useMemo } from "react";

const Appis = () => {
    const [count, setCount] = useState(0);
    const [update, setUpdate] = useState(10);

    // will take reference from count state
    // const multicount = () => {
    //     console.log('count is called');
    //     return count * 5;
    // };

    const multicount = useMemo(() => {
        console.log('count is called');
        return count * 5;
    }, [count]);


    return (
        <>
            <h2>Count: {count}</h2>
            <h2>Update: {update}</h2>
            <h3>multicount: {multicount}</h3> {/* Call the function here */}

            <button type="button" onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
            <button type="button" onClick={() => {
                setUpdate(update * 10);
            }}>Update</button>
        </>
    );
};

export default Appis;





