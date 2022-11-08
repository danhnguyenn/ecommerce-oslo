import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
	const [scrollToTop, setScrollToTop] = useState(false);

	const handleScrollToTop = () => {
		if (window.scrollY >= 200) {
			setScrollToTop(true);
		} else {
			setScrollToTop(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScrollToTop);

		// Cleanup function
		return () => {
			window.removeEventListener('scroll', handleScrollToTop);
		};
	}, []);

	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: '20px;',
				right: '20px;',
				zIndex: '10'
			}}
		>
			{scrollToTop ? (
				<Button
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: 'smooth'
						});
					}}
					sx={{
						width: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
						height: 'calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)))',
						borderRadius: '100%',
						backgroundColor: '#0f8fac',
						border: '1px solid transparent',
						'&:hover': {
							backgroundColor: '#ffa422'
						}
					}}
				>
					<KeyboardDoubleArrowUpIcon
						sx={{
							width: 'calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)))',
							height: 'calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)))',
							stroke: '#fff',
							color: '#fff'
						}}
					/>
				</Button>
			) : (
				''
			)}
		</Box>
	);
};

export default ScrollToTop;
