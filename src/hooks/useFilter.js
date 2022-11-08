import filterSelector from '$store/selectors/filterSelector';
import { filterActions, filterAsyncActions } from '$store/slices/filterSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useFilter = () => {
	const dispatch = useDispatch();

	const search = useSelector(filterSelector.selectFiltersSearch);

	const brands = useSelector(filterSelector.selectFiltersBrand);

	const isLoadingBrand = useSelector(filterSelector.selectIsLoading);

	const isActive = useSelector(filterSelector.selectIsActive);

	const handleFilterCategory = categoryId => {
		dispatch(filterActions.filterCategory(categoryId));
	};

	const handleFilterBrand = brands => {
		dispatch(filterActions.filterBrand(brands));
	};

	const handleFilterSearch = name => {
		dispatch(filterActions.filterSearch(name));
	};

	const handleFilterByPrice = price => {
		dispatch(filterActions.filterByPrice(price));
	};
	const fetchBrandAll = useCallback(() => {
		dispatch(filterAsyncActions.fetchBrand());
	}, [dispatch]);

	return {
		isActive,
		isLoadingBrand,
		fetchBrandAll,
		search,
		brands,
		handleFilterCategory,
		handleFilterBrand,
		handleFilterSearch,
		handleFilterByPrice
	};
};

export default useFilter;
