import React from 'react'
import {useStateValue} from "./StateProvider"

function Transition({transition}) {

const [{transitions},dispatch]=useStateValue();

const sign = transition.amount < 0 ?'-' :'+';


 const DelectedTransition=(id)=>{
     dispatch({
         type:"DELECTE_TRANSACTION",
         payload:id
     });
 }


    return (
        <div>
            <li className={transition.amount < 0 ? 'minus':'plus'}>
     
     {transition.text} <span> {sign} ${Math.abs(transition.amount)} </span>
     
     <button onClick={()=>DelectedTransition(transition.id)} className="delete-btn">x</button>
        </li>
        </div>
    )
}

export default Transition
