import cartSelector from '$store/selectors/cartSelector';
import { cartAction } from '$store/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import useNotify from './useNotify';

const useCart = () => {
	const dispatch = useDispatch();

	const { success } = useNotify();

	const cartsSelected = useSelector(cartSelector.selectCarts);

	const subTotal = useSelector(cartSelector.selectTotal);

	const handleAddToCart = (product, quantity = 0) => {
		dispatch(cartAction.addToCart({ ...product, quantity }));
		success('Add to cart Successfully');
	};

	const handleDecreaseCart = cartItem => {
		dispatch(cartAction.decreaseCart(cartItem));
	};

	const handleIncreaseCart = cartItem => {
		dispatch(cartAction.increaseCart(cartItem));
	};

	const handleClearAllCart = () => {
		dispatch(cartAction.clearAllCart());
		success('Deleted Successfully');
	};

	const handleClearCart = () => {
		dispatch(cartAction.clearAllCart());
	};

	const handleClearOneCart = cartItem => {
		dispatch(cartAction.clearOne(cartItem));
		success('Deleted  Successfully');
	};

	const countSelectCart = () => {
		let count = 0;
		for (let i = 0; i < cartsSelected.length; i++) {
			count += cartsSelected[i].cartQuantity;
		}
		return count;
	};

	const totalQuantityCart = () => {
		let amount = 0;
		for (let i = 0; i < cartsSelected.length; i++) {
			amount += cartsSelected[i].cartQuantity;
		}
		return amount;
	};

	return {
		handleAddToCart,
		handleClearCart,
		cartsSelected,
		totalQuantityCart,
		handleClearOneCart,
		handleDecreaseCart,
		handleIncreaseCart,
		handleClearAllCart,
		subTotal,
		countSelectCart
	};
};

export default useCart;
