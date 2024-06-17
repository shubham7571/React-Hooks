import React, { useReducer } from 'react'


const reducer = (state, action) => {

    //switch case
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count==10  ? state.count% state.count:state.count+ 1 };
        case " DECREMNET":
            return { count: state.count === 0 ? state.count - 0 : state.count - 1 };


        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p> count: {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMNET</button>

        </div>
    )
}


export default Counter