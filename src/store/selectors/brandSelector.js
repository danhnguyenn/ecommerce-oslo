import { createSelector } from '@reduxjs/toolkit';

const selectBrand = state => state.brand;

const selectBrands = createSelector(selectBrand, brand => brand.brands);

const selectIsLoading = createSelector(selectBrand, brand => brand.isLoading);

const brandSelector = {
	selectIsLoading,
	selectBrands
};

export default brandSelector;
