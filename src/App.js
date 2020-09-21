import React from 'react';
import Header from "./Header";
import Balance from "./Balance";
import IcomeExpenses from "./IcomeExpenses";
import TransitionList from "./TransitionList";
import AddTransition from "./AddTransition";
import './App.css';


function App() {
  return (
    <div>
     
      <Header/>
     
       <div className="container">
          
          <Balance/>
          <IcomeExpenses/>
          <TransitionList/>
          <AddTransition/>
         </div>

    </div>
  );
}

export default App;
