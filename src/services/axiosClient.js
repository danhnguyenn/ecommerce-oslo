import authStorage from '$utils/authStorage';
import axios from 'axios';

const axiosOptions = {
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
};
const axiosClient = axios.create(axiosOptions);

// Interceptors
axiosClient.interceptors.request.use(
	request => {
		if (!request.headers.Authorization) {
			const token = authStorage.getToken();
			if (token) {
				request.headers.Authorization = `Bearer ${token}`;
			}
		}
		return request;
	},
	error => Promise.reject(error)
);

axiosClient.interceptors.response.use(
	response => response.data,
	error => Promise.reject(error.response?.data || error)
);

export default axiosClient;
