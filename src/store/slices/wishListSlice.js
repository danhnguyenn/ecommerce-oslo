import wishListService from '$services/wishListService';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
	likeList: [],
	isLiked: false,
	isLoading: false
};

const addWishList = createAsyncThunk('wishList/add', async (params, { rejectWithValue }) => {
	try {
		return await wishListService.addWishList(params);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const getWishList = createAsyncThunk('wishList/get', async (params, { rejectWithValue }) => {
	try {
		return await wishListService.getWishListWithUser(params);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const deleteProductWithLikeList = createAsyncThunk('wishList/delete-product', async (params, { rejectWithValue }) => {
	try {
		return await wishListService.deleteProduct(params);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const wishListSlice = createSlice({
	name: 'wishList',
	initialState,
	reducers: {
		clearProduct: (state, { payload }) => {
			state.likeList.splice(
				state.likeList.findIndex(item => item.id === payload),
				1
			);
		}
	},
	extraReducers: {
		[addWishList.fulfilled]: (state, { payload }) => {
			if (payload.user) {
				state.likeList = payload.user ? payload.user.wishListIds : [];
			}
			state.isLiked = true;
			state.isLoading = false;
		},
		[addWishList.rejected]: state => {
			state.isLoading = false;
		},
		[addWishList.pending]: state => {
			state.isLoading = true;
		},

		// Get wish list
		[getWishList.fulfilled]: (state, { payload }) => {
			state.likeList = payload.user.wishListIds;
			state.isLoading = false;
		},
		[getWishList.rejected]: state => {
			state.isLoading = false;
		},
		[getWishList.pending]: state => {
			state.isLoading = true;
		},

		[deleteProductWithLikeList.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
		},
		[deleteProductWithLikeList.rejected]: state => {
			state.isLoading = false;
		},
		[deleteProductWithLikeList.pending]: state => {
			state.isLoading = true;
		}
	}
});

export const wishListActions = wishListSlice.actions;

export const wishListAsyncAction = { getWishList, addWishList, deleteProductWithLikeList };

const persistConfig = {
	keyPrefix: 'ecommerce',
	key: 'Wishlist',
	storage
};

const wishListReducer = persistReducer(persistConfig, wishListSlice.reducer);

export default wishListReducer;
