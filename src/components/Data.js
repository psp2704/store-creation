import React from 'react'

function Data() {
    return (
        <div className='container pt-5 d-flex justify-center'>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-header">
                    Actions
                </div>
                <ul class="list-group list-group-flush">

                    <li class="list-group-item">
                        <button className='btn btn-primary'>Income</button>
                    </li>
                    <li class="list-group-item">
                        <button className='btn btn-primary'>Expense</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Data