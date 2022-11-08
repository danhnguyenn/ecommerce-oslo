import { createSelector } from '@reduxjs/toolkit';

const selectCart = state => state.cart;

const selectCarts = createSelector(selectCart, cart => cart.cartItems);

const selectTotal = createSelector(selectCart, cart => cart.total);

const cartSelector = {
	selectCarts,
	selectTotal
};
export default cartSelector;
