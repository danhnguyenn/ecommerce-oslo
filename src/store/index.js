import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import addressReducer from './slices/addressSlice';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import categoriesReducer from './slices/categoriesSlice';
import couponReducer from './slices/couponSlice';
import filterReducer from './slices/filterSlice';
import orderReducer from './slices/orderSlice';
import productReducer from './slices/productSlice';
import wishListReducer from './slices/wishListSlice';

const reducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	product: productReducer,
	category: categoriesReducer,
	filter: filterReducer,
	address: addressReducer,
	coupon: couponReducer,
	order: orderReducer,
	wishList: wishListReducer
});

const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export const persistor = persistStore(store);

export default store;
