import wishListSelector from '$store/selectors/wishListSelector';
import { wishListActions, wishListAsyncAction } from '$store/slices/wishListSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useNotify from './useNotify';

const useWishList = () => {
	const { success, error } = useNotify();
	const dispatch = useDispatch();

	const likeList = useSelector(wishListSelector.selectListLikes);
	const isLiked = useSelector(wishListSelector.selectIsLiked);
	const isLoading = useSelector(wishListSelector.selectIsLoading);

	const handleAddWishList = async data => {
		try {
			const actionResult = await dispatch(wishListAsyncAction.addWishList(data));
			const { message } = await unwrapResult(actionResult);
			success(message);
		} catch ({ message }) {
			error(message);
		}
	};

	const fetchWishList = useCallback(
		id => {
			dispatch(wishListAsyncAction.getWishList(id));
		},
		[dispatch]
	);

	const handleDeleteProductWithUser = async id => {
		try {
			const actionResult = await dispatch(wishListAsyncAction.deleteProductWithLikeList(id));
			const { message } = await unwrapResult(actionResult);
			success(message);
		} catch ({ message }) {
			error(message);
		}
	};

	const handleClearProduct = id => {
		dispatch(wishListActions.clearProduct(id));
	};

	return {
		handleAddWishList,
		handleDeleteProductWithUser,
		likeList,
		isLiked,
		isLoading,
		fetchWishList,
		handleClearProduct
	};
};

export default useWishList;
