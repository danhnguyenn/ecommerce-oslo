export const isEmpty = object => {
	if (object) {
		if (Array.isArray(object)) {
			return !object.length;
		}

		if (Object.getPrototypeOf(object) === Object.prototype) {
			return !Object.keys(object).length;
		}
	}

	return false;
};

export const typeOf = value => value?.constructor?.name || Object.prototype.toString.call(value).slice(8, -1);
