import brandSelector from '$store/selectors/brandSelector';
import { brandAsyncActions } from '$store/slices/brandSlice';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useBrand = () => {
	const dispatch = useDispatch();

	const brands = useSelector(brandSelector.selectBrands);

	const isLoadingBrand = useSelector(brandSelector.selectIsLoading);

	const fetchBrandAll = useCallback(() => {
		dispatch(brandAsyncActions.fetchBrand());
	}, [dispatch]);

	return {
		isLoadingBrand,
		fetchBrandAll,
		brands
	};
};

export default useBrand;
