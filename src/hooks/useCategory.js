import categoriesSelector from '$store/selectors/categoriesSelector';
import { categoriesAsyncActions } from '$store/slices/categoriesSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCategory = () => {
	const dispatch = useDispatch();

	const categories = useSelector(categoriesSelector.selectCategories);

	const isLoading = useSelector(categoriesSelector.selecIsLoading);

	const productsWithCategory = useSelector(categoriesSelector.selectDetailCategories);

	const fetchCategoriesAll = useCallback(() => {
		dispatch(categoriesAsyncActions.fetchCategories());
	}, [dispatch]);

	const fetchProductWithCategory = categoriesId => {
		dispatch(categoriesAsyncActions.fetchDetailCategories(categoriesId));
	};

	return {
		categories,
		isLoading,
		fetchCategoriesAll,
		fetchProductWithCategory,
		productsWithCategory
	};
};

export default useCategory;
