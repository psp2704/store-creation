import React from 'react'

function income(amount, dispatch) {

    (async () => dispatch({
        type: "INCOME",
        payload: amount
    })
    )
}


function expense(amount, dispatch) {

    (async () => dispatch({
        type: "EXPENSE",
        payload: amount
    })
    )
}

export default { expense, income }