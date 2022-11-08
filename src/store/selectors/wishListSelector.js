import { createSelector } from '@reduxjs/toolkit';

const selectWishList = state => state.wishList;

const selectListLikes = createSelector(selectWishList, item => item.likeList);

const selectIsLoading = createSelector(selectWishList, item => item.isLoading);

const selectIsLiked = createSelector(selectWishList, item => item.isLiked);

const wishListSelector = {
	selectListLikes,
	selectIsLoading,
	selectIsLiked
};
export default wishListSelector;
