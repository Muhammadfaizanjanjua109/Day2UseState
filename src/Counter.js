import React, { useState } from 'react'

function Counter() {
    const [val,funVal]=useState(0);
  return (
    <div>
        <h1>{val}</h1>
        <button onClick={()=>{funVal(val+1)}}>Increment</button>
        <button onClick={()=>{funVal(val-1)}}>Decreament</button>
        <button  onClick={()=>{funVal(0)}}>Reset</button>
    </div>
  )
}

export default Counter