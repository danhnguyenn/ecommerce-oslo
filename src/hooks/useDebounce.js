import { useEffect, useState } from 'react';

const useDebounce = (value, deplay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setDebouncedValue(value);
		}, deplay);

		return () => {
			clearTimeout(timeOutId);
		};
	}, [value, deplay]);

	return debouncedValue;
};

export default useDebounce;
