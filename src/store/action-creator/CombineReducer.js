import { combineReducers } from '@reduxjs/toolkit'
import React from 'react'
import accountReducer from './accountReducer'



export const CombineReducer = combineReducers({
    account : accountReducer,
})