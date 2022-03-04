import React, { useState } from 'react'

function FormDesign() {
    const [input,inputfun]=useState('')
    const Inputfunction=(e)=>{
       inputfun(e.target.value);
    }
  return (
    <div>
<input type='text' name='UserName'  onChange={(e)=>{Inputfunction(e)}}/>
<button>Submit</button>
<h1>{input}</h1>
    </div>
  )
}

export default FormDesign