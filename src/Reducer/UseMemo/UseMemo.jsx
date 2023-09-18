import React, { useMemo, useState } from 'react'


export default function UseMemo() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const inc1 = () => {
        setCounter1(counter1 + 1)
    }

    const dec1 = () => {
        setCounter2(counter2 - 1)
    }

    const isEven = useMemo(() => {

        let i = 0;
        while (i < 900000000) i++;
        return counter1 % 2 === 0
    }, [counter1])





    return (

        <>
            <button onClick={inc1}>{counter1}</button>
            <span>{isEven ? "even" : "odd"}</span>
            <button onClick={dec1}>{counter2}</button>
        </>
    )

}