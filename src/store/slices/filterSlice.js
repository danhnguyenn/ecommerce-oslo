import brandsService from '$services/brandService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	filter: {
		search: '',
		brands: [],
		categories: '',
		checkedBrands: [],
		sortByPrice: {
			salePrice_gte: 0,
			salePrice_lte: 0
		}
	},
	isLoading: false,
	isActive: false
};
const fetchBrand = createAsyncThunk('brands/fetchBrand', async (_, { rejectWithValue }) => {
	try {
		return await brandsService.getAll();
	} catch (error) {
		return rejectWithValue(error);
	}
});

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		filterCategory: (state, { payload }) => {
			state.filter.categories = payload;
		},
		filterBrand: (state, { payload }) => {
			state.filter.checkedBrands = payload;
		},
		filterSearch: (state, { payload }) => {
			state.filter.search = payload;
		},
		filterByPrice: (state, { payload }) => {
			state.filter.sortByPrice = payload;
		}
	},
	extraReducers: {
		[fetchBrand.fulfilled]: (state, { payload }) => {
			state.filter.brands = payload.brands;
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

export const filterActions = filterSlice.actions;

export const filterAsyncActions = { fetchBrand };

const filterReducer = filterSlice.reducer;

export default filterReducer;
