import axiosClient from './axiosClient';

const orderService = {
	getUserOrderDetail: userId => {
		const url = `/orders/${userId}`;
		return axiosClient.get(url);
	},
	addOrder: data => {
		const url = '/orders';
		return axiosClient.post(url, data);
	}
};

export default orderService;
