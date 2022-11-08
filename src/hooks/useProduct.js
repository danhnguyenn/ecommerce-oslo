import categoriesSelector from '$store/selectors/categoriesSelector';
import filterSelector from '$store/selectors/filterSelector';
import productSelector from '$store/selectors/productSelector';
import { productActions, productAsyncActions } from '$store/slices/productSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useProduct = () => {
	const dispatch = useDispatch();

	const products = useSelector(productSelector.selectProductList);

	const isLoading = useSelector(productSelector.selecIsLoading);

	const pagination = useSelector(productSelector.selectPagination);

	const categories = useSelector(categoriesSelector.selectCategories);

	const filter = useSelector(filterSelector.selectFilters);

	const fetchProductAll = useCallback(() => {
		dispatch(productAsyncActions.fetchProduct(filter));
	}, [dispatch, filter]);

	const handlePaginationChange = useCallback(
		pagination => {
			dispatch(productActions.setPagination(pagination));
		},
		[dispatch]
	);

	return {
		filter,
		products,
		fetchProductAll,
		isLoading,
		handlePaginationChange,
		pagination,
		categories
	};
};

export default useProduct;
