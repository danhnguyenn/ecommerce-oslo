import addressSelector from '$store/selectors/addressSelector';
import { addressActions, addressAsyncAction } from '$store/slices/addressSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useNotify from './useNotify';

const useAddress = () => {
	const { success, error } = useNotify();

	const dispatch = useDispatch();

	const addressList = useSelector(addressSelector.selectAddressList);

	const isLoading = useSelector(addressSelector.selectIsLoading);

	const addressChecked = useSelector(addressSelector.selectAddressChecked);

	const addressListChecked = useSelector(addressSelector.selectAddressCheckedList);

	const handleAddAddress = async data => {
		try {
			const actionResult = await dispatch(addressAsyncAction.addAddress(data));
			const { message } = await unwrapResult(actionResult);
			success(message);
		} catch ({ message }) {
			error(message);
		}
	};

	const handleDeleteAddress = async id => {
		try {
			const actionResult = await dispatch(addressAsyncAction.deleteAddress(id));
			const { message } = await unwrapResult(actionResult);
			success(message);
		} catch ({ message }) {
			error(message);
		}
	};

	const handleAddAddressChecked = async address => {
		dispatch(addressActions.addChecked(address));
	};

	const handleClearAddress = id => {
		dispatch(addressActions.clearAddress(id));
	};

	const fetchAddressWithUser = useCallback(
		userId => {
			dispatch(addressAsyncAction.getUserWithAddress(userId));
		},
		[dispatch]
	);

	return {
		addressList,
		isLoading,
		addressChecked,
		handleAddAddress,
		handleClearAddress,
		addressListChecked,
		handleAddAddressChecked,
		fetchAddressWithUser,
		handleDeleteAddress
	};
};

export default useAddress;
