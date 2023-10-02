import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsDataThunk } from './application.thunk';


const initialState = {
  products: [],
  isDataLoading: false,
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsDataThunk.pending, (state) => { state.isDataLoading = true; })
      .addCase(fetchProductsDataThunk.fulfilled, (state, action) => { state.products = action.payload; state.isDataLoading = false; });
  }
});

export const applicationReducer = applicationSlice.reducer;
