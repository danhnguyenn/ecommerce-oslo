import { createSelector } from '@reduxjs/toolkit';

const selectFilter = state => state.filter;

const selectFilters = createSelector(selectFilter, filter => filter.filter);

const selectIsLoading = createSelector(selectFilter, filter => filter.isLoading);

const selectFiltersSearch = createSelector(selectFilters, filter => filter.search);

// const selectBrands = createSelector(selectFilters, filter => filter.brands);

const selectIsActive = createSelector(selectFilter, filter => filter.isActive);

const filterSelector = {
	selectIsLoading,
	selectIsActive,
	selectFilters,
	selectFiltersSearch
};

export default filterSelector;
