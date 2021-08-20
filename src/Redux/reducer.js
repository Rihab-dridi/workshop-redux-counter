import { INCREMMENT, DECREMMENT, RESET } from "./action-type";

const initialState={
  counter:0,
   timer :0
}

const counterReducer =(state=initialState, action)=>{

  switch( action.type  ){
case INCREMMENT: return {...state, counter: state.counter +1  };

case DECREMMENT: return {...state, counter: state.counter&& state.counter -1  };

case RESET: return{...state, counter:0 }  
default: return state

}}

export default counterReducer