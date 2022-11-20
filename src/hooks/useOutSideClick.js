import { useEffect, useRef } from 'react';

const useOutSideClick = callback => {
	const ref = useRef();

	useEffect(() => {
		const handleClick = e => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback();
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref]);
	return ref;
};

export default useOutSideClick;
