import addressService from '$services/addressService';
import authService from '$services/userService';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
	addressListWithUser: [],
	isLoading: false,
	addressChecked: ''
};

const getUserWithAddress = createAsyncThunk('user/getAddressWithUser', async (userId, { rejectWithValue }) => {
	try {
		return await authService.getAddressWithUser(userId);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const addAddress = createAsyncThunk('address/add', async (params, { rejectWithValue }) => {
	try {
		return await addressService.addressAdd(params);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const deleteAddress = createAsyncThunk('address/delete', async (id, { rejectWithValue }) => {
	try {
		return await addressService.deleteAddress(id);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const addressSlice = createSlice({
	name: 'address',
	initialState,
	reducers: {
		addChecked: (state, { payload }) => {
			state.addressChecked = payload;
		},
		clearAddress: (state, { payload }) => {
			state.addressListWithUser.splice(
				state.addressListWithUser.findIndex(item => item.id === payload),
				1
			);
		}
	},
	extraReducers: {
		// handle add address action
		[addAddress.fulfilled]: (state, { payload }) => {
			state.addressListWithUser.push(payload.address);
			state.isLoading = false;
		},
		[addAddress.rejected]: state => {
			state.isLoading = false;
		},
		[addAddress.pending]: state => {
			state.isLoading = true;
		},

		// Get address action
		[getUserWithAddress.fulfilled]: (state, { payload }) => {
			state.addressListWithUser = payload.user.addressList;
			state.isLoading = false;
		},
		[getUserWithAddress.rejected]: state => {
			state.isLoading = false;
		},
		[getUserWithAddress.pending]: state => {
			state.isLoading = true;
		},

		[deleteAddress.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
		},
		[deleteAddress.rejected]: state => {
			state.isLoading = false;
		},
		[deleteAddress.pending]: state => {
			state.isLoading = true;
		}
	}
});

export const addressActions = addressSlice.actions;

export const addressAsyncAction = { addAddress, getUserWithAddress, deleteAddress };

const persistConfig = {
	keyPrefix: 'ecommerce',
	key: 'Address',
	storage
};

const addressReducer = persistReducer(persistConfig, addressSlice.reducer);

export default addressReducer;
