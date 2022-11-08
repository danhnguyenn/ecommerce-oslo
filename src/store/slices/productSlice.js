import productService from '$services/productService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	isLoading: false,
	pagination: {
		page: 1,
		limit: 12,
		total: 10
	}
};
const fetchProduct = createAsyncThunk('products/fetchProduct', async (filter, { rejectWithValue, getState }) => {
	try {
		return await productService.getAll(getState().product.pagination, filter);
	} catch (error) {
		return rejectWithValue(error);
	}
});
const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setPagination: (state, { payload }) => {
			state.pagination = payload;
		}
	},
	extraReducers: {
		[fetchProduct.fulfilled]: (state, { payload }) => {
			state.products = payload.products;
			state.pagination = payload.pagination;
			state.isLoading = false;
		},
		[fetchProduct.rejected]: state => {
			state.isLoading = false;
		},
		[fetchProduct.pending]: state => {
			state.isLoading = true;
		}
	}
});

export const productActions = productSlice.actions;

export const productAsyncActions = { fetchProduct };

const productReducer = productSlice.reducer;

export default productReducer;
