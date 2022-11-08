import axiosClient from './axiosClient';

const url = '/brands';

const brandsService = {
	getAll: () => axiosClient.get(url)
};

export default brandsService;
