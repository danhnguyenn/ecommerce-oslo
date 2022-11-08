import queryString from 'query-string';
import axiosClient from './axiosClient';

const url = '/products';

const productService = {
	getAll: (pagination, filter) =>
		axiosClient.get(
			`${url}?
			${queryString.stringify(pagination)}
			&categories=${filter.categories}&brands=${filter.checkedBrands}
			&salePrice_gte=${filter.sortByPrice?.salePrice_gte}&salePrice_lte=${filter.sortByPrice?.salePrice_lte}`
		)
};

export default productService;
