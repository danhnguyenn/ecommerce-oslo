import axiosClient from './axiosClient';

const url = '/address';

const addressService = {
	addressAdd: data => axiosClient.post(url, data),
	deleteAddress: id => axiosClient.delete(`${url}/${id}`)
};

export default addressService;
