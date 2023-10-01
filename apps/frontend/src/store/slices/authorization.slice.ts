import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../types/authorization-status.enum';
import { LogedUserData } from '../../types/loged-user-data.interface';
import { checkIsAuthorizedThunk, loginThunk } from './authorization.thunk';
import { setToken } from '../../pages/services/token';


export interface AuthorizationState {
  authorizationStatus: AuthorizationStatus;
  logedUserData: LogedUserData | null;
  isLoading: boolean;
}

const initialState: AuthorizationState = {
  authorizationStatus: AuthorizationStatus.UNDEFINED,
  logedUserData: null,
  isLoading: false,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<LogedUserData>) => {
        state.isLoading = false;
        state.logedUserData = action.payload;
        state.authorizationStatus = AuthorizationStatus.AUTH;
        console.log(action.payload.token);

        setToken(action.payload.token);
      })
      .addCase(checkIsAuthorizedThunk.fulfilled, (state, action: PayloadAction<LogedUserData>) => {
        state.logedUserData = action.payload;
        state.authorizationStatus = AuthorizationStatus.AUTH;
      })
      .addCase(checkIsAuthorizedThunk.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.UNAUTH;
      })
  }
});

export const authorizationReducer = authorizationSlice.reducer;
