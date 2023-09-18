import React, { useRef } from 'react'
//unControlled component as controlled by DOM
//to kmow the current state from DOM=>useRef lifecycle hook

function UseRef() {
    const inputElement = useRef(null);
    const onButtonClick = () => {
        //'current' points to the mounted text input element
        console.log("current input fild", inputElement.current);



        //collecting value from the fild using useRef
        console.log("input fild values", inputElement.current.value);
    }

    return (
        <div>
            <input ref={inputElement} type='text' />
            <button onClick={onButtonClick}>Click</button>
        </div>
    )
}

export default UseRef