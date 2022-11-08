import axiosClient from './axiosClient';

const url = '/categories';

const categoriesService = {
	getAll: () => axiosClient.get(url),
	getDetail: id => axiosClient.get(`${url}/${id}`)
};

export default categoriesService;
