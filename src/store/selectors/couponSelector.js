const { createSelector } = require('@reduxjs/toolkit');

const selectCoupton = state => state.coupon;

const selectPriceSale = createSelector(selectCoupton, coupon => coupon.priceSale);

const selectShipPrice = createSelector(selectCoupton, coupon => coupon.shipPrice);

const couponSelector = {
	selectPriceSale,
	selectShipPrice
};

export default couponSelector;
