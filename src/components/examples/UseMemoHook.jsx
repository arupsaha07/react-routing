import React, { useState } from 'react'

export default function UseMemoHook() {

    const [count, setCount] = useState(0)
    const [dbl, dblCount] = useState(0)

    let double = expensiveCalc(dbl)

    function counter() {
        return setCount(count + 1)
    }

    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold mb-8 text-gray-600'>UseMemoHook</h1>
            <h2 className='text-2xl mb-8'> {count}</h2>
            <button className='border bg-gray-500 px-3 py-2 text-white' onClick={counter}>Add Number</button>
            <input type="number" value={dbl} onChange={(e) => dblCount(e.target.value)} />
            double: {double}
        </div>
    )
}

function expensiveCalc(num) {
    console.log("expensive application")
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
}

