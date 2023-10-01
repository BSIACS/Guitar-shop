import { configureStore } from '@reduxjs/toolkit';
import { applicationReducer } from './slices/application.slice';
import { authorizationReducer } from './slices/authorization.slice';

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    authorization: authorizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
