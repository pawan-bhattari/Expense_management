import React from 'react'
import {useStateValue} from "./StateProvider";
import Transition from "./Transition"

function TransitionList() {
 
   const [{transitions},dispatch]=useStateValue();

   

    return (
        <>
           <h3>History</h3>
           <ul  className="list">
             {transitions.map(transition=>( <Transition key={transition.id} transition={transition}/> ))}
           
      </ul> 
        </>
    )
}

export default TransitionList
