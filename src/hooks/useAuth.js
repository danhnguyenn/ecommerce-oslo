import Route from '$constants/Route';
import authSelector from '$store/selectors/authSelector';
import { authAsyncActions } from '$store/slices/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useNotify from './useNotify';

const useAuth = () => {
	const navigate = useNavigate();

	const { success, error } = useNotify();

	const dispatch = useDispatch();

	const user = useSelector(authSelector.selectUser);

	const isLoading = useSelector(authSelector.selectIsLoading);

	const isLogined = useSelector(authSelector.selectisLogined);

	const handleLogin = async (data, from = Route.HomePage) => {
		try {
			const actionResult = await dispatch(authAsyncActions.login(data));
			const { message } = await unwrapResult(actionResult);
			success(message);
			navigate(from);
		} catch ({ message }) {
			error(message);
		}
	};
	const handleRegister = async (data, from = Route.LoginPage) => {
		try {
			const actionResult = await dispatch(authAsyncActions.register(data));
			const { message } = await unwrapResult(actionResult);
			success(message);
			navigate(from);
		} catch ({ message }) {
			error(message);
		}
	};
	const handleLogout = async data => {
		try {
			const actionResult = await dispatch(authAsyncActions.logout(data));
			const { message } = await unwrapResult(actionResult);
			success(message);
			navigate(Route.HomePage);
		} catch ({ message }) {
			error(message);
		}
	};

	return {
		user,
		isLoading,
		isLogined,
		handleLogin,
		handleRegister,
		handleLogout
	};
};

export default useAuth;
