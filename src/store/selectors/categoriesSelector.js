import { createSelector } from '@reduxjs/toolkit';

const selectCategory = state => state.category;

const selectCategories = createSelector(selectCategory, category => category.categories);

const selectDetailCategories = createSelector(selectCategory, category => category.categoriesDetail);

const selecIsLoading = createSelector(selectCategory, category => category.isLoading);

const categoriesSelector = {
	selectCategories,
	selecIsLoading,
	selectDetailCategories
};

export default categoriesSelector;
