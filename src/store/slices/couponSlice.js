const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	priceSale: 0,
	shipPrice: 20
};

const couponSlice = createSlice({
	name: 'coupon',
	initialState,
	reducers: {
		changePriceSale: (state, { payload }) => {
			state.priceSale = payload;
		}
	},
	extraReducers: {}
});

export const couponActions = couponSlice.actions;

export const couponAsyncActions = {};

const couponReducer = couponSlice.reducer;

export default couponReducer;
