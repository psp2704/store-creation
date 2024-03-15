import React from 'react';

function accountReducer(state = 0, action) {
    const { type, payload } = action;
    switch (type) {
        case "INCOME":
            return state + payload;
        case "EXPENSE":
            return state - payload;
        default:
            return state;
    }
}

export default accountReducer;
