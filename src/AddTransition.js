import React,{useState} from 'react'
import {useStateValue} from "./StateProvider"

function AddTransition() {

 const [text,setText] =useState('')
 const [amount,setAmount]=useState(0)
 
 const [{transitions},dispatch]=useStateValue();


 const addvalue=(transaction)=>{
 
   dispatch({
     type : "ADD_TRANSACTION",
     payload:transaction
     
   });

 }

 const onSubmit=(e)=>{
   e.preventDefault();
   const newTransaction ={
     
    id : Math.floor(Math.random() * 100000),
    text,
    amount :+amount
}
addvalue(newTransaction);
}
    return (
        <>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      </>
    )
}

export default AddTransition
