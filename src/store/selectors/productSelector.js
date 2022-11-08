import { createSelector } from '@reduxjs/toolkit';

const selectProduct = state => state.product;
const selectFilter = state => state.filter;

const selectFiltersSearch = createSelector(selectFilter, filter => filter.filter.search);

const selectProducts = createSelector(selectProduct, product => product.products);
const selectPagination = createSelector(selectProduct, product => product.pagination);

const selectProductList = createSelector(selectProducts, selectFiltersSearch, (products, search) => {
	return products.filter(product => {
		if (search) {
			return product.title.toLowerCase().includes(search.toLowerCase());
		}
		return products;
	});
});

const selecIsLoading = createSelector(selectProduct, product => product.isLoading);

const productSelector = {
	selectProductList,
	selectProduct,
	selectFiltersSearch,
	selectProducts,
	selecIsLoading,
	selectFilter,
	selectPagination
};

export default productSelector;
