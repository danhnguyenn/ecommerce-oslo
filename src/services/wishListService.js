import axiosClient from './axiosClient';

const wishListService = {
	addWishList: params => {
		const url = `/users/liked-product/${params.userId}/${params.productId}`;
		return axiosClient.get(url);
	},
	getWishListWithUser: id => {
		const url = `/users/liked-product/${id}`;
		return axiosClient.get(url);
	},
	deleteProduct: id => {
		const url = `/users/delete-product/${id}`;
		return axiosClient.delete(url);
	}
};

export default wishListService;
