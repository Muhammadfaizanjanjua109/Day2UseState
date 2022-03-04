import React, { useState } from 'react'
const Student=[
    {id:1,name:"faizan"},
    {id:2,name:"adnan"},
]
function FormDesign() {
 
    const [input,inputfun]=useState('');
    const [itemsData,setItems]=useState(Student);

    const inputData=(e)=>{
        inputfun(e.target.value);
    }

    const InsertData=(event)=>{
        event.preventDefault();
        setItems(
            [
                ...itemsData,
                {
                    id:itemsData.length+1,
                    name:input
                }
            ]
        )
        inputfun('');
    }
    


 return(
     <>
     <form onSubmit={(event)=>{InsertData(event)}}>
         <input name='name' type='text' value={input} onChange={(e)=>{inputData(e)}} />
     </form>
     {itemsData.map((input)=>{
    return <> 
        <h1>{input.id}</h1>
    <h1>{input.name}</h1>
    </>
})}
     </>     



);}

export default FormDesign