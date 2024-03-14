import React from 'react'

function accountReducer(state, action) {
 const {type, payload} = action;
 switch(type){
    case "INCOME" : {
        state : state + amount
    }
    case "EXPENSE" : {
        state : state-amount
    } 
    default: return state  
    }

}

export default accountReducer