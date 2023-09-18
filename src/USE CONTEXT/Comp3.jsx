import React, { useContext } from 'react'
import { userDetailsContext } from '../App'

export const Comp3 = () => {
    const contextData = useContext(userDetailsContext);
    console.log("context value:", contextData);
    return (
        <div>
            <h1>Comp3</h1>
            <p>user name:{contextData.Name}</p>
            <p>roll no:{contextData.Roll}</p>
        </div>
    )
}

export default Comp3