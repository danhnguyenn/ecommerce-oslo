import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.auth;

const selectUser = createSelector(selectAuth, auth => auth.user);

const selectIsLoading = createSelector(selectAuth, auth => auth.isLoading);

const selectisLogined = createSelector(selectAuth, auth => auth.isLogined);

const authSelector = {
	selectUser,
	selectIsLoading,
	selectisLogined
};

export default authSelector;
