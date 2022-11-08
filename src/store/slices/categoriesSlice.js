import categoriesService from '$services/categoriesService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	categories: [],
	isLoading: false,
	isActive: false,
	categoriesDetail: []
};
const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, { rejectWithValue }) => {
	try {
		return await categoriesService.getAll();
	} catch (error) {
		return rejectWithValue(error);
	}
});

const fetchDetailCategories = createAsyncThunk('categories/fetchDetailCategories', async (id, { rejectWithValue }) => {
	try {
		return await categoriesService.getDetail(id);
	} catch (error) {
		return rejectWithValue(error);
	}
});
const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchCategories.fulfilled]: (state, { payload }) => {
			state.categories = payload.categories;
			state.isLoading = false;
		},
		[fetchCategories.rejected]: state => {
			state.isLoading = false;
		},
		[fetchCategories.pending]: state => {
			state.isLoading = true;
		},

		// Fetch category detail
		[fetchDetailCategories.fulfilled]: (state, { payload }) => {
			state.categoriesDetail = payload.category.products;
			state.isLoading = false;
		},
		[fetchDetailCategories.rejected]: state => {
			state.isLoading = false;
		},
		[fetchDetailCategories.pending]: state => {
			state.isLoading = true;
		}
	}
});

export const categoriesActions = categoriesSlice.actions;

export const categoriesAsyncActions = { fetchCategories, fetchDetailCategories };

const categoriesReducer = categoriesSlice.reducer;

export default categoriesReducer;
