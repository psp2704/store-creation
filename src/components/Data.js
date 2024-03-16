import React from 'react'
import { tasks } from '../store/actions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'



function Data() {

    const dispatch = useDispatch()
    const action = bindActionCreators(tasks ,dispatch)  //action

    return (
        <div className='container pt-5 d-flex justify-center'>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-header">
                    Actions
                </div>
                <ul class="list-group list-group-flush">

                    <li class="list-group-item">
                        <button className='btn btn-primary' onClick={()=>action.income(100)}>Income</button>
                    </li>
                    <li class="list-group-item">
                        <button className='btn btn-primary' onClick={()=>action.expense(100)}>Expense</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Data