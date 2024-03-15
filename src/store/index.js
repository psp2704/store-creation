import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import React from 'react';
import accountReducer from './action-creator/accountReducer';

const store = configureStore({
  reducer: accountReducer,
 
});

export default store;
