import userService from '$services/userService';
import authStorage from '$utils/authStorage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const login = createAsyncThunk('auth/login', async (params, { rejectWithValue }) => {
	try {
		return await userService.login(params);
	} catch (error) {
		return rejectWithValue(error);
	}
});
const register = createAsyncThunk('auth/register', async (params, { rejectWithValue }) => {
	try {
		return await userService.register(params);
	} catch (error) {
		return rejectWithValue(error);
	}
});
const logout = createAsyncThunk('auth/logout', async (params, { rejectWithValue }) => {
	try {
		return await userService.logout(params);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const initialState = {
	user: null,
	isLoading: false,
	isLogined: false
};

const authSlice = createSlice({
	name: 'auth',
	initialState,

	extraReducers: {
		// handle login action
		[login.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.isLoading = false;
			state.isLogined = true;

			authStorage.saveToken(payload.token, payload.refreshToken);
		},
		[login.rejected]: state => {
			state.isLoading = false;
		},
		[login.pending]: state => {
			state.isLoading = true;
		},

		// register
		[register.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.isLoading = false;

			authStorage.saveToken(payload.token, payload.refreshToken);
		},
		[register.pending]: state => {
			state.isLoading = true;
		},
		[register.rejected]: state => {
			state.isLoading = false;
		},

		// logout
		[logout.fulfilled]: state => {
			state.user = null;
			state.isLoading = false;

			authStorage.destroyToken();
		},
		[logout.rejected]: state => {
			state.isLoading = false;
		},
		[logout.pending]: state => {
			state.isLoading = true;
		}
	}
});

export const authActions = authSlice.actions;

export const authAsyncActions = { login, register, logout };

const persistConfig = {
	keyPrefix: 'ecommerce',
	key: 'Auth',
	storage
};

const authReducer = persistReducer(persistConfig, authSlice.reducer);

export default authReducer;
