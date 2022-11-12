import orderService from '$services/orderService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
	orderList: [],
	isLoading: false,
	success: false,
	order: {}
};

const addOrder = createAsyncThunk('orders/updateOrder', async (params, { rejectWithValue }) => {
	try {
		return orderService.addOrder(params);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const fetchOrder = createAsyncThunk('orders/fetchOrders', async (userId, { rejectWithValue, getState }) => {
	try {
		return await orderService.getUserOrderDetail(userId);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const orderSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		resetOrder: state => {
			state.success = false;
		}
	},
	extraReducers: {
		[fetchOrder.fulfilled]: (state, { payload }) => {
			state.orderList = payload.order;
		},
		[fetchOrder.rejected]: state => {
			state.isLoading = false;
		},
		[fetchOrder.pending]: state => {
			state.isLoading = true;
		},

		[addOrder.fulfilled]: (state, { payload }) => {
			state.order = payload.order;
			state.success = true;
		},
		[addOrder.rejected]: state => {
			state.isLoading = false;
		},
		[addOrder.pending]: state => {
			state.isLoading = true;
		}
	}
});

export const orderActions = orderSlice.actions;

export const orderAsyncActions = { addOrder, fetchOrder };

const persistConfig = {
	keyPrefix: 'ecommerce',
	key: 'Order',
	storage
};

const orderReducer = persistReducer(persistConfig, orderSlice.reducer);

export default orderReducer;
