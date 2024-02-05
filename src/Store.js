import {createStore} from 'redux'

const reducerFn=(state={counter:0}, action)=>{
   if(action.type==="INC")
      {  

       return {counter: state.counter+2};

      }
  

    if(action.type==="DC")
      {
        return {counter: state.counter-1};


      } 



     if(action.type==="addby10") {

      return { counter: state.counter+10} 

     }   
    return state;

}

 const store=createStore(reducerFn);
 export default store;
