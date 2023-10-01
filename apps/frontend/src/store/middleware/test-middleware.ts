/* eslint-disable no-console */
import { Middleware } from '@reduxjs/toolkit';

export const testMiddleware: Middleware = (store) => (nextDispatch) => (action) => {

  console.log('testMiddleware invoke');
  console.log(store.getState());

  nextDispatch(action);
};
