import React from 'react';

export function income(amount) {
    return (dispatch) => dispatch({
        type: "INCOME",
        payload: amount
    });
}

export function expense(amount) {
    return (dispatch) => dispatch({
        type: "EXPENSE",
        payload: amount
    });
}
