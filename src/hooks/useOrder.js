import orderSelector from '$store/selectors/orderSelector';
import { orderActions, orderAsyncActions } from '$store/slices/orderSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import useNotify from './useNotify';

const useOrder = () => {
	const dispatch = useDispatch();

	const { success, error } = useNotify();

	const orders = useSelector(orderSelector.selectOrderList);

	const order = useSelector(orderSelector.selectOneOrder);

	const successOrder = useSelector(orderSelector.selectSuccess);

	const handleAddOrder = async data => {
		try {
			const actionResult = await dispatch(orderAsyncActions.addOrder(data));
			const { message } = await unwrapResult(actionResult);
			success(message);
		} catch ({ message }) {
			error(message);
		}
	};

	const handleResetOrder = () => {
		dispatch(orderActions.resetOrder());
	};

	return {
		order,
		orders,
		handleAddOrder,
		handleResetOrder,
		successOrder
	};
};

export default useOrder;
