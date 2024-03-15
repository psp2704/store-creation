import React, { createContext, useReducer } from 'react'


    // 1 create the context
   export const DataContext = createContext();


    //  intial state 
    const INITIAL_STATE = {
        title: 'hello',
        completed: '12'
    }

    //reducer 
    const reducer = (state, action) => {
        const { type, payload } = action;
        switch (type) {
            case "ADD_TODO":
                return {
                    title: payload.title,
                    completed: false
                }
            case "UPDTAE_TODO":
                return {
                    ...state,
                    completed: true
                }
            default:
                return state;
        }
    }

    //2 create the provider
  export const DataProvider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

        function addTodo(todo) {
            dispatch({ type: "ADD_TODO", payload: todo });
        }

        function updateTodo() {
            dispatch({ type: 'UPDTAE_TODO' });
        }

        const toggle = () =>{
            const main = document.getElementsByTagName('main')[0];
            if(!main.classList.contains("bg-dark")){
                main.className="bg-dark";
            }else{
                main.classList.remove("bg-dark");
            }
        }

        return (
        <DataContext.Provider value={{ state, addTodo, updateTodo, toggle }}>
            {children}
        </DataContext.Provider>
        )
    }


