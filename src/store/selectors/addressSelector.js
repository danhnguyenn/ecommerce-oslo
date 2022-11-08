import { createSelector } from '@reduxjs/toolkit';

const selectAddress = state => state.address;

const selectAddressList = createSelector(selectAddress, address => address.addressListWithUser);

const selectAddressChecked = createSelector(selectAddress, address => address.addressChecked);

const selectAddressCheckedList = createSelector(
	selectAddressList,
	selectAddressChecked,
	(addressList, addressChecked) => {
		return addressList.filter(item => item._id === addressChecked);
	}
);

const selectIsLoading = createSelector(selectAddress, address => address.isLoading);

const addressSelector = {
	selectAddressList,
	selectIsLoading,
	selectAddressChecked,
	selectAddressCheckedList
};
export default addressSelector;
