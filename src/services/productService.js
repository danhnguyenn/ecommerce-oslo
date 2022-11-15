import queryString from 'query-string';
import axiosClient from './axiosClient';

const url = '/products';

const productService = {
	getAll: (pagination, filter) =>
		axiosClient.get(
			`${url}?
			search=${filter.search}
			&categories=${filter.categories}&brands=${filter.checkedBrands}
			&salePrice_gte=${filter.salePrice_gte}&salePrice_lte=${filter.salePrice_lte}&
			${queryString.stringify(pagination)}
			`
		)
};

export default productService;
