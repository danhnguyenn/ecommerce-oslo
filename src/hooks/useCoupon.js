import { couponActions } from '$store/slices/couponSlice';

const { default: couponSelector } = require('$store/selectors/couponSelector');
const { useDispatch, useSelector } = require('react-redux');

const useCoupon = () => {
	const dispatch = useDispatch();

	const priceSale = useSelector(couponSelector.selectPriceSale);

	const shipPrice = useSelector(couponSelector.selectShipPrice);

	const handleChangePriceSale = priceSale => {
		dispatch(couponActions.changePriceSale(priceSale));
	};

	return {
		priceSale,
		shipPrice,
		handleChangePriceSale
	};
};

export default useCoupon;
