import { Button } from 'antd'
import React from 'react'
import CustomHook from './CustomHook';

function UseCounter() {
    const [count, Increment, Decrement] = CustomHook(0);
    return (
        <div>
            <div>
                <h1>
                {count}
                </h1>
                <Button onClick={Increment} >INCREMENT</Button>
                <Button onClick={Decrement} >DECREMENT</Button>
            </div>
        </div>
    )
}

export default UseCounter