import axiosClient from './axiosClient';

const url = '/users/get-address';

const authService = {
	logout: () => axiosClient.patch('auth/logout'),
	login: data => axiosClient.post('auth/login', data),
	register: data => axiosClient.post('auth/register', data),
	getAddressWithUser: userId => axiosClient.get(`${url}/${userId}`)
};

export default authService;
