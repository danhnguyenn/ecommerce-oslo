import { createSelector } from '@reduxjs/toolkit';

const selectAddress = state => state.address;

const selectAddressList = createSelector(selectAddress, address => address.addressListWithUser);

const selectAddressChecked = createSelector(selectAddress, address => address.addressChecked);

const selectAddressEdit = createSelector(selectAddress, address => address.addressEdit);

const selectAddressCheckedList = createSelector(
	selectAddressList,
	selectAddressChecked,
	(addressList, addressChecked) => {
		return addressList.filter(item => item._id === addressChecked);
	}
);

const selectIsLoading = createSelector(selectAddress, address => address.isLoading);

const addressSelector = {
	selectAddressEdit,
	selectAddressList,
	selectIsLoading,
	selectAddressChecked,
	selectAddressCheckedList
};
export default addressSelector;
