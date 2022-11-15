import brandsService from '$services/brandService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	brands: [],
	isLoading: false
};
const fetchBrand = createAsyncThunk('brands/fetchBrand', async (_, { rejectWithValue }) => {
	try {
		return await brandsService.getAll();
	} catch (error) {
		return rejectWithValue(error);
	}
});

const brandSlice = createSlice({
	name: 'brands',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchBrand.fulfilled]: (state, { payload }) => {
			state.brands = payload.brands;
			state.isLoading = false;
		},
		[fetchBrand.rejected]: state => {
			state.isLoading = false;
		},
		[fetchBrand.pending]: state => {
			state.isLoading = true;
		}
	}
});

export const brandActions = brandSlice.actions;

export const brandAsyncActions = { fetchBrand };

const brandReducer = brandSlice.reducer;

export default brandReducer;
