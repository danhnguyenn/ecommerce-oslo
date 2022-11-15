import { Box, CardMedia, styled, Typography } from '@mui/material';

const MyHeadingFour = styled(Typography)(({ theme }) => ({
	fontWeight: '500',
	fontSize: 'calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)))',
	lineHeight: 'calc(20px + (22 - 20) * ((100vw - 320px) / (1920 - 320)))',
	position: 'relative',
	cursor: 'pointer',
	zIndex: 2,
	display: 'inline-block',
	marginBottom: 'calc(20px + (25 - 20) * ((100vw - 320px) / (1920 - 320)))',
	textAlign: 'center'
}));

const NotFoundData = () => {
	return (
		<Box
			sx={{
				marginTop: '15px',
				height: '300px'
			}}
		>
			<CardMedia
				component="img"
				image="https://cdn.dribbble.com/users/721524/screenshots/4117132/media/6dff4135f851cd4af82839d83e00d1d6.png?compress=1&resize=800x600&vertical=top"
				alt="Not Found"
				sx={{
					objectFit: 'contain',
					height: '100%',
					margin: '0 auto'
				}}
			/>
		</Box>
	);
};

export default NotFoundData;
