import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filter: {
		search: '',
		categories: '',
		checkedBrands: [],
		salePrice_gte: 0,
		salePrice_lte: 0
	},
	isLoading: false,
	isActive: false
};

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
			state.filter.salePrice_gte = payload.salePrice_gte;
			state.filter.salePrice_lte = payload.salePrice_lte;
		}
	},
	extraReducers: {}
});

export const filterActions = filterSlice.actions;

export const filterAsyncActions = {};

const filterReducer = filterSlice.reducer;

export default filterReducer;
