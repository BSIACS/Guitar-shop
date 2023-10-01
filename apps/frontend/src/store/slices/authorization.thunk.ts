/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthorizeRequest } from '../../types/authorize-request.interface';
import { AuthorizeResponse } from '../../types/authorize-response.interface';


export const loginThunk = createAsyncThunk(
  'authorization/loginThunk',
  async (payload: AuthorizeRequest, thunkApi) => {
    try {
      const response = await axios.post<AuthorizeResponse>('http://localhost:5557/api/users/login', {
        email: payload.email,
        password: payload.password
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

