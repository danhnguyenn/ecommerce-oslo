import axiosClient from './axiosClient';

const orderService = {
	getAllOrder: userId => {
		const url = `/orders/userorders/${userId}`;
		return axiosClient.get(url);
	},
	addOrder: data => {
		const url = '/orders';
		return axiosClient.post(url, data);
	}
};

export default orderService;
