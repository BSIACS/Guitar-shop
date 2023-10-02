/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchProductsDataThunk = createAsyncThunk(
  'application/fetchProductsDataThunk',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get('http://localhost:5557/api/products/index');

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

