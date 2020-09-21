
export const initialState = {
    transitions:[]
  };
  
  const reducer = (state, action) => {
    console.log(action);
   
    switch (action.type) {

      case "DELECTE_TRANSACTION":

        return { ...state, transitions:state.transitions.filter(transition=>transition.id !== action.payload) };
   
        case "ADD_TRANSACTION":
        return {...state,transitions:[action.payload,...state.transitions]}

        default:
        return state;
    }
  };
  
  export default reducer;