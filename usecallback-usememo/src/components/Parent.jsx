import React from 'react'
import { useState } from 'react'
import Child from './Child';
import { useCallback } from 'react';

const Parent = () => {
    const [number,  setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const increamentCount = () => {
        setCount(count+1)
    }

    const increamentNumber = useCallback(() =>{
        console.log("increament number")
        setNumber(number+1)
    },[number]);

  return (
    <div>
      <button onClick={increamentCount}>count: {count}</button>
      <Child increamentNumber={increamentNumber}/>
    </div>
  )
}

export default Parent
