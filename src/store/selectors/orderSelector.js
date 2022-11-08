import { createSelector } from '@reduxjs/toolkit';

const selectOrder = state => state.order;

const selectOrderList = createSelector(selectOrder, order => order.orders);

const selectOneOrder = createSelector(selectOrder, order => order.order);

const selectSuccess = createSelector(selectOrder, order => order.success);

const selectIsLoading = createSelector(selectOrder, order => order.isLoading);

const orderSelector = {
	selectOneOrder,
	selectOrderList,
	selectIsLoading,
	selectSuccess
};
export default orderSelector;
