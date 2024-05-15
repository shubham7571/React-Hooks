import React, { useEffect, useRef, useState } from 'react';

function TimeSet() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);


        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalRef.current);
    }, []);

    // Function to stop the interval
    const stopInterval = () => {
        clearInterval(intervalRef.current)
    }
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={stopInterval}>Stop</button>
        </div>
    );
}

export default TimeSet;
