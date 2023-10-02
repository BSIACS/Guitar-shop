/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthorizeRequest } from '../../types/authorize-request.interface';
import { AuthorizeResponse } from '../../types/authorize-response.interface';
import { CheckIsAuthorizedRequest } from '../../types/check-is-authorized-request.interface';
import { CheckIsAuthorizedResponse } from '../../types/check-is-authorized-response.interface';


export const loginThunk = createAsyncThunk(
  'authorization/loginThunk',
  async (payload: AuthorizeRequest, thunkApi) => {
    try {
      const response = await axios.post<AuthorizeResponse>('http://localhost:5557/api/users/login', {
        email: payload.email,
        password: payload.password
      }, { headers: { 'Content-Type': 'application/json' } });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const checkIsAuthorizedThunk = createAsyncThunk(
  'authorization/checkIsAuthorizedThunk',
  async (payload: CheckIsAuthorizedRequest, thunkApi) => {
    try {
      const response = await axios.post<CheckIsAuthorizedResponse>('http://localhost:5557/api/users/checkauth', {}, {headers: {'Authorization': `Bearer ${payload.token}`}});
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

