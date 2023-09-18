import React, { useReducer } from 'react'

const Reducer = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'inc': return state + 1;
            case 'dec': return state - 1;
            case 'reset': return 0;
            default:
                console.log("unexpected action");
        }
    }

    const [num, dispathc] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => dispathc('inc')}>+1</button>
            <br></br>
            <button onClick={() => dispathc('dec')}>-1</button>
            <button onClick={() => dispathc('reset')}>reset</button>

        </div>
    )
}

export default Reducer