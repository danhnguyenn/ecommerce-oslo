import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
	cartItems: []
};

const cartSlice = createSlice({
	name: 'carts',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			const itemIndex = state.cartItems.findIndex(item => item._id === payload._id);

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += payload.quantity > 0 ? payload.quantity : 1;
			} else {
				const tempProduct = { ...payload, cartQuantity: payload.quantity > 0 ? payload.quantity : 1 };
				state.cartItems.push(tempProduct);
			}
		},
		decreaseCart: (state, { payload }) => {
			const itemIndex = state.cartItems.findIndex(item => item._id === payload._id);

			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.cartItems.filter(item => item._id !== payload._id);
				state.cartItems = nextCartItems;
			}
		},
		increaseCart: (state, { payload }) => {
			const itemIndex = state.cartItems.findIndex(item => item._id === payload._id);
			if (state.cartItems[itemIndex].cartQuantity !== 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
			}
			if (state.cartItems[itemIndex].cartQuantity > payload.countInStock) {
				state.cartItems[itemIndex].cartQuantity = payload.countInStock;
			}
		},
		clearAllCart: (state, { payload }) => {
			state.cartItems = [];
		},
		clearOne: (state, { payload }) => {
			state.cartItems.splice(
				state.cartItems.findIndex(item => item.id === payload._id),
				1
			);
		}
	},
	extraReducers: {}
});

export const cartAction = cartSlice.actions;

const persistConfig = {
	keyPrefix: 'mini-shop',
	key: 'Cart',
	storage
};

const cartReducer = persistReducer(persistConfig, cartSlice.reducer);

export default cartReducer;
