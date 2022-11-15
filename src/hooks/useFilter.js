import filterSelector from '$store/selectors/filterSelector';
import { filterActions } from '$store/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const useFilter = () => {
	const dispatch = useDispatch();

	const filters = useSelector(filterSelector.selectFilters);

	const search = useSelector(filterSelector.selectFiltersSearch);

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

	return {
		filters,
		isActive,
		search,
		handleFilterCategory,
		handleFilterBrand,
		handleFilterSearch,
		handleFilterByPrice
	};
};

export default useFilter;
